#!/usr/bin/env node

import fs from 'fs';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function uploadToOpenAI() {
  // Check for required environment variables
  const hasRequiredEnv = process.env.OPENAI_API_KEY && process.env.VECTOR_STORE_ID;
  if (!hasRequiredEnv) {
    console.error('❌ Missing required environment variables.');
    console.error('   Required: OPENAI_API_KEY, VECTOR_STORE_ID');
    process.exit(1);
  }

  try {
    console.log('🔍 Retrieving vector store...');
    // Retrieve the vector store using the stored ID from environment variables
    const vector = await openai.vectorStores.retrieve(process.env.VECTOR_STORE_ID);
    if (!vector) {
      console.error('❌ Vector store not found; cannot create link to uploaded file.');
      process.exit(1);
    }
    console.log('✅ Retrieved vector store.');

    console.log('📋 Listing existing files in OpenAI storage...');
    // List all files in OpenAI's file storage
    const { data: files } = await openai.files.list();
    console.log(`📄 Found ${files.length} existing files in OpenAI storage.`);

    // Find and delete existing file first to avoid conflicts
    const existingFile = files.find(f => f.filename === 'ultimateguide.md');
    if (existingFile) {
      console.log(`🗑️  Deleting existing file: ${existingFile.filename}`);
      await openai.files.delete(existingFile.id);
      console.log('✅ Deleted existing file.');
    }

    console.log('📤 Uploading new ultimateguide.md file...');
    // Upload the new 'ultimateguide.md' file to OpenAI's file storage for use by assistants
    const upload = await openai.files.create({ 
      file: fs.createReadStream('ultimateguide.md'), 
      purpose: 'assistants' 
    });
    console.log(`✅ Uploaded new file: ${upload.filename} (ID: ${upload.id})`);

    console.log('🔗 Linking file to vector store...');
    // Create a link between the uploaded file and the vector store
    await openai.vectorStores.files.create(vector.id, { file_id: upload.id });
    console.log('✅ Successfully linked uploaded file to vector store.');

    console.log('🎉 Upload process completed successfully!');

  } catch (error) {
    console.error('❌ An error occurred:', error.message);
    if (error.response) {
      console.error('   Response status:', error.response.status);
      console.error('   Response data:', error.response.data);
    }
    process.exit(1);
  }
}

// Run the upload function
uploadToOpenAI();
