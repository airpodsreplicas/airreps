import { describe, expect, test } from 'bun:test';
import { outboundTarget } from '../docs/.vitepress/theme/guide-metrics';
import { activeSale, SALES, saleText } from '../docs/.vitepress/theme/sales';

describe('sale banner', () => {
    test('shows each sale only between its announcement and the coupon expiry', () => {
        const bf = SALES.find((s) => s.id === 'bf26');
        expect(bf).toBeDefined();
        expect(activeSale(new Date('2026-11-19T08:59:59Z'))).toBeNull();
        expect(activeSale(new Date('2026-11-19T09:00:00Z'))?.id).toBe('bf26');
        expect(activeSale(new Date('2026-11-27T12:00:00Z'))?.id).toBe('bf26');
        expect(activeSale(new Date('2026-12-01T22:58:59Z'))?.id).toBe('bf26');
        expect(activeSale(new Date('2026-12-01T22:59:00Z'))).toBeNull();
        expect(activeSale(new Date('2027-03-20T12:00:00Z'))?.id).toBe('easter27');
        expect(activeSale(new Date('2026-11-06T12:00:00Z'))).toBeNull();
    });

    test('sales are well formed and never overlap', () => {
        const sorted = [...SALES].sort((a, b) => Date.parse(a.start) - Date.parse(b.start));
        for (const [i, sale] of sorted.entries()) {
            expect(Number.isNaN(Date.parse(sale.start))).toBe(false);
            expect(Date.parse(sale.end)).toBeGreaterThan(Date.parse(sale.start));
            if (i > 0) {
                expect(Date.parse(sale.start)).toBeGreaterThanOrEqual(
                    Date.parse(sorted[i - 1].end)
                );
            }
            expect(sale.offers.map((o) => o.store)).toEqual(['Jenny', 'HiCity', 'Earhive']);
            for (const offer of sale.offers) {
                // Each link is the seller's own sale short link and is counted for that seller.
                expect(offer.href).toBe(
                    `https://airreps.link/${offer.store.toLowerCase()}${sale.id}`
                );
                expect(outboundTarget(offer.href)).toBe(
                    offer.store.toLowerCase() as 'jenny' | 'hicity' | 'earhive'
                );
                expect(offer.code).toMatch(/^[A-Z0-9]+$/);
            }
        }
    });

    test('copy is localised, shows the Copenhagen end date and falls back to English', () => {
        const bf = SALES[0];
        const en = saleText(bf, 'en-US');
        expect(en.headline).toBe('Black Friday');
        expect(en.offer).toBe('10% off everything at all three sellers until Dec 1');
        expect(en.linkLabel(bf.offers[0])).toBe('Jenny: code JBLACK10 is applied for you');
        expect(saleText(bf, 'de-DE').offer).toContain('1. Dez.');
        expect(saleText(bf, 'ru-RU').headline).toBe('Чёрная пятница');
        expect(saleText(bf, 'xx').headline).toBe('Black Friday');
        for (const lang of [
            'da-DK',
            'de-DE',
            'es-ES',
            'fr-FR',
            'pl-PL',
            'pt-BR',
            'ru-RU',
            'tr-TR',
        ]) {
            const text = saleText(bf, lang);
            expect(text.offer).not.toContain('{date}');
            expect(text.offer).not.toBe(en.offer);
        }
    });
});
