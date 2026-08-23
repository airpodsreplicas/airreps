---
title: "Privacy Policy"
description: "How the AirReps Discord bot collects, uses, and protects data."
ogLabel: "LEGAL"
sidebar: false
---

# Privacy Policy

This page covers what the AirReps Discord bot collects, why we keep it, and how you can ask us to remove it.

**Last updated:** August 23, 2026

## Introduction

The AirReps staff team runs the AirReps Discord bot ("the Bot") used in the [AirReps](https://airpodsreplicas.com) community. This Privacy Policy describes how we collect, use, store, and protect information when you invite or use the Bot. Using the Bot means you agree to the practices below.

These pages sit next to our [Terms of Service](/bot/terms). Discord also has its own [Privacy Policy](https://discord.com/privacy).

## Information We Collect

The Bot keeps what it needs to run the features listed in the Terms. That includes:

- Discord user IDs, usernames, display names, server (guild) IDs, and channel IDs
- Role IDs when you pick a language role or when staff tools need permission checks
- Command usage (which slash command ran, and when), including optional staff command logs
- Feedback text you submit with `/feedback`
- Giveaway entries: your Discord user ID and, if the giveaway requires it, the KakoBuy UID you type in
- Member analytics: join and leave counts, join timestamps, tenure, hour-of-day of joins/leaves, and IDs used to tell a rejoin from a first join
- Message content and attachments when a live feature needs them: anti-scam (text, image signatures, and a copy of the first image for the mod report), the KakoBuy converter (Weidian / Taobao / 1688 / Tmall URLs in a message), and the Reddit mirror (text and images from the configured announcement channel)

This is stored against your Discord identity and the servers where the Bot is used. Persistent data lives in a local SQLite database on the machine that runs the Bot. Anti-scam matching uses a short in-memory window of recent messages.

We do not ask for your email, phone number, payment details, or legal name. A KakoBuy UID is only stored if you enter one on a giveaway. If you mail staff those details yourself, that is outside the Bot.

## How We Use Your Information

We use this data to:

- Show seller catalogs and ordering helpers (`/jenny`, `/hicity`, `/earhive`, `/ultimateguide`, `/wise`, `/text`, `/alipay`, `/eartip`, `/resethelp`)
- Convert currency with `/convert`
- Assign language roles you pick
- Take feedback to a staff channel
- Run giveaways (`/gs`) and validate KakoBuy UIDs when a host turns that on
- Build daily / weekly / monthly member reports and milestone posts
- Update the voice-channel member count
- Send a welcome DM when you join the configured AirReps guild
- Flag cross-channel scam spam, time out the account, delete the burst, DM you, and report to mod chat
- Reply to marketplace links with a KakoBuy checkout URL (affiliate code `airreps`)
- Cross-post selected Discord announcements to [r/airreps](https://www.reddit.com/r/airreps)
- Debug failures and keep a staff audit trail when logging is on

We may look at aggregated member counts to improve the server. We do not sell personal data.

## Third-Party Services

The Bot talks to several services to do the above:

- **Discord** — the API that runs every command, event, DM, and timeout. Discord's terms and privacy policy apply. We do not control Discord.
- **Frankfurter (ECB rates)** — `/convert` sends the amount and currency codes to fetch a rate. Rates are cached in memory for a few hours.
- **Reddit** — when the mirror is on, announcement text and images are uploaded through Reddit's API to the configured subreddit.
- **KakoBuy** — converted product URLs are sent to KakoBuy (including an AirReps affiliate code) so the reply can include a checkout link and thumbnail.

We only share data when it is required to operate those features, when the law requires it, or to prevent serious harm. We do not sell or rent data for advertising.

## Data Retention and Deletion

How long something lives depends on the feature:

- **Giveaways** stay in SQLite until a host ends or deletes them (entries, optional UIDs, winners).
- **Member analytics** (join/leave counters, hourly buckets, departed IDs, join timestamps) stay so daily/weekly/monthly reports and rejoin detection still work. Join timestamps can remain after someone leaves so tenure is accurate if they come back.
- **Anti-scam** buffers are short-lived in memory (tens of seconds). The mod-channel report, including a saved image preview, stays in Discord like any other staff message.
- **Feedback** is posted to a staff channel and then lives there as a Discord message.
- **Command logs**, when enabled, are Discord messages in a log channel.
- **Reddit posts** remain on Reddit under Reddit's own retention rules.
- Cached Discord objects follow normal API caching.

If you want a copy or deletion of data we stored in SQLite (giveaway entry, join timestamp, and similar), join [AirReps Discord](https://airreps.link/discord) and message staff. We will handle requests in a reasonable time. We cannot erase messages, timeouts, or Reddit posts that now live only on Discord or Reddit.

## Security

We limit who on the staff team can see stored data and we use ordinary technical safeguards on the host that holds the SQLite file. No setup is perfect. If you think something leaked or was accessed without permission, tell staff right away.

## Changes to this Privacy Policy

We may revise this policy when the Bot or the law changes. The "Last updated" date at the top is the current version. Keeping the Bot after a change means you accept the new policy.

## Contact

Questions about this policy, or a deletion request: join [AirReps Discord](https://airreps.link/discord) and message staff.
