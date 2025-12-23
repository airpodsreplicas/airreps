---
description: Dowiedz się o technologii Aktywnej Redukcji Szumów (ANC), jej różnych implementacjach (Feedback, Feedforward i Hybrydowa) oraz jak jest wykorzystywana w AirPods i ich klonach.
translationStatus: machine-translated
---

# Aktywna Redukcja Szumów (ANC) Wyjaśniona

Aktywna Redukcja Szumów (ANC) to technologia, która redukuje niepożądany hałas otoczenia poprzez generowanie fal dźwiękowych, które znoszą szumy. Działa poprzez tworzenie "anty-szumów", które przeciwdziałają nadchodzącym falom dźwiękowym, skutecznie redukując to, co słyszysz. Chociaż ANC znacząco redukuje zewnętrzny hałas, rzadko eliminuje go całkowicie.

Istnieją trzy różne implementacje ANC: Feedback, Feedforward i Hybrydowa. Każda ma swoje zalety i wady.

## ANC Feedback

ANC Feedback wykorzystuje mikrofon umieszczony wewnątrz muszli słuchawki do wychwytywania tych samych dźwięków, które słyszy słuchacz. Pozwala to ANC adaptować się do nagłych zmian i dokonywać skutecznych korekcji sygnału. ANC Feedback działa dobrze w szerokim zakresie częstotliwości, nawet jeśli słuchawki są noszone w nietypowy sposób.

Jednak ANC Feedback ma trudności z dźwiękami o wysokiej częstotliwości (szczególnie w zakresie 1000-2000 Hz). Nieodpowiedni projekt może prowadzić do sprzężenia szumów. Ponadto filtrowanie mikrofonu wewnątrz muszli może skutkować odfiltrowywaniem Twojej muzyki.

## ANC Feedforward

ANC Feedforward wykorzystuje zewnętrzny mikrofon do przetwarzania szumów przed dotarciem do słuchacza. Pozwala to ANC feedforward lepiej radzić sobie z szumami o wysokiej częstotliwości.

Ponieważ nie słyszy anty-szumów, które produkuje, ANC feedforward nie ma samokorekcji. Działa również w węższym zakresie częstotliwości i jest bardziej wrażliwe na zewnętrzne źródła szumów, takie jak wiatr, z powodu zewnętrznego umiejscowienia mikrofonu.

## ANC Hybrydowe

ANC Hybrydowe łączy ANC feedback i feedforward, wykorzystując zarówno wewnętrzne, jak i zewnętrzne mikrofony. Zapewnia korzyści obu metod, minimalizując ich wady. ANC Hybrydowe tłumi szumy w szerszym zakresie, adaptuje się do nagłych zmian w szumach i nie jest wrażliwe na pozycję słuchawek.

Jednak użycie dwóch mikrofonów zwiększa koszty produkcji i złożoność. Technologia wymaga większej ekspertyzy do prawidłowej implementacji. Oryginalne AirPods Pro wykorzystują hybrydowe ANC, co przyczynia się do ich wyższej ceny. Wiele obecnych klonów AirPods również implementuje hybrydowe ANC przy użyciu zaawansowanych chipsetów. Na przykład v5.3 TB (z chipsetem Airoha 1571AM) replikuje efekt hybrydowego ANC dla pełnego i autentycznego doświadczenia redukcji szumów.

::: tip
Hybrydowe ANC, choć droższe, łączy korzyści zarówno ANC feedback, jak i feedforward, zapewniając bardziej kompleksowe doświadczenie redukcji szumów.
:::
