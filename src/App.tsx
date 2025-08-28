import { motion } from "motion/react";
import {
  Search,
  Upload,
  Image,
  X,
  ExternalLink,
  Star,
  Filter,
  ChevronDown,
  Menu,
  ShoppingCart,
  Mail,
} from "lucide-react";
import { Input } from "./components/ui/input";
import { useState, useEffect, useRef } from "react";
import { apiService } from "./services/api";
import { SemanticSearchService } from "./services/semanticSearch";
import { ProductMapper } from "./services/productMapper";
import Component1739SendungslogoHoehleDerLoewen1 from "./imports/1739SendungslogoHoehleDerLoewen1";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
// import newLogo from "figma:asset/c0fc08fb8ac086100ef05688f165334af6e75dcc.png";

// Blog Articles Data
const blogArticles = [
  {
    id: 1,
    title: "BIOM8: Vom Deal zur Millionen-Marke",
    excerpt: "Nach dem erfolgreichen Deal mit Judith Williams hat sich BIOM8 zu einer der erfolgreichsten Marken der Staffel entwickelt. Das Probiotika-Unternehmen konnte den Umsatz um 400% steigern...",
    content: `
      <h2>Eine Erfolgsgeschichte aus der Höhle der Löwen</h2>
      
      <p>Als die Gründer von BIOM8 vor wenigen Monaten in die Höhle der Löwen traten, ahnten sie noch nicht, welchen enormen Erfolg ihr Probiotika-Unternehmen haben würde. Nach dem Deal mit Judith Williams konnte das Unternehmen seinen Umsatz um beeindruckende 400% steigern.</p>
      
      <h3>Der Pitch und der Deal</h3>
      
      <p>Mit ihrer innovativen Formel aus 8 verschiedenen Bakterienstämmen überzeugten die BIOM8-Gründer nicht nur die Investoren, sondern auch die Zuschauer. Judith Williams erkannte sofort das Potenzial des Produkts und sicherte sich mit ihrem Investment eine Beteiligung an dem Unternehmen.</p>
      
      <blockquote>"BIOM8 hat alles, was ein erfolgreiches Produkt braucht: Innovation, Qualität und ein riesiger Markt", so Judith Williams über ihr Investment.</blockquote>
      
      <h3>Die Zahlen sprechen für sich</h3>
      
      <p>Seit der Ausstrahlung der Folge hat sich einiges getan:</p>
      
      <ul>
        <li><strong>400% Umsatzsteigerung</strong> in den ersten 6 Monaten nach Ausstrahlung</li>
        <li><strong>Über 50.000 neue Kunden</strong> konnten gewonnen werden</li>
        <li><strong>4,6 Sterne Bewertung</strong> bei über 1.200 Kundenbewertungen</li>
        <li><strong>Expansion ins europäische Ausland</strong> bereits in Planung</li>
      </ul>
      
      <h3>Was macht BIOM8 so besonders?</h3>
      
      <p>Das Geheimnis des Erfolgs liegt in der einzigartigen Zusammensetzung der Probiotika. Die 8 verschiedenen Bakterienstämme wurden speziell ausgewählt, um die Darmgesundheit optimal zu unterstützen. Dabei setzen die Gründer auf:</p>
      
      <ul>
        <li>Höchste Qualitätsstandards bei der Produktion</li>
        <li>Wissenschaftlich belegte Wirksamkeit</li>
        <li>Natürliche Inhaltsstoffe ohne künstliche Zusätze</li>
        <li>Vegane und glutenfreie Formulierung</li>
      </ul>
      
      <h3>Ausblick in die Zukunft</h3>
      
      <p>Mit dem Erfolg wachsen auch die Pläne: BIOM8 arbeitet bereits an weiteren Produkten im Bereich der Darmgesundheit und plant die Expansion in neue Märkte. "Wir wollen der führende Anbieter für Probiotika in Europa werden", erklärt einer der Gründer.</p>
      
      <p>Der Erfolg von BIOM8 zeigt einmal mehr, wie wichtig es ist, auf Qualität und Innovation zu setzen. Mit Judith Williams haben sie nicht nur eine erfahrene Investorin, sondern auch eine starke Partnerin für die weitere Entwicklung gefunden.</p>
    `,
    author: "Judith Williams",
    date: "15. Dez 2024",
    category: "Success Story",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=400&fit=crop",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Die erfolgreichsten Kategorien in Staffel 16",
    excerpt: "Eine Analyse der aktuellen Staffel zeigt: Gesundheits- und Lifestyle-Produkte dominieren weiterhin die Show. Wir schauen uns die Trends genauer an und erklären, warum bestimmte Produktkategorien bei den Investoren besonders beliebt sind...",
    content: `
      <h2>Trends und Patterns in der aktuellen Staffel</h2>
      
      <p>Staffel 16 der Höhle der Löwen bringt wieder spannende Produkte und innovative Geschäftsideen. Doch welche Kategorien sind bei den Investoren besonders gefragt? Eine detaillierte Analyse zeigt interessante Trends auf.</p>
      
      <h3>Die Top-Kategorien im Überblick</h3>
      
      <p>Nach 8 Folgen der aktuellen Staffel zeichnen sich klare Favoriten ab:</p>
      
      <ol>
        <li><strong>Gesundheit & Beauty (32%)</strong> - Der klare Spitzenreiter</li>
        <li><strong>Tech & Innovation (24%)</strong> - Digitale Lösungen im Aufwind</li>
        <li><strong>Food & Beverage (18%)</strong> - Nachhaltigkeit als Trend</li>
        <li><strong>Lifestyle & Fashion (14%)</strong> - Nachhaltige Mode gefragt</li>
        <li><strong>Sport & Outdoor (8%)</strong> - Nischenzielgruppen im Fokus</li>
        <li><strong>Sonstige (4%)</strong> - Überraschende Newcomer</li>
      </ol>
      
      <h3>Warum Gesundheit & Beauty dominiert</h3>
      
      <p>Die anhaltende Dominanz der Gesundheits- und Beauty-Kategorie hat mehrere Gründe:</p>
      
      <blockquote>"Gesundheit ist das höchste Gut. Produkte, die Menschen dabei helfen, gesünder zu leben, haben immer eine große Zielgruppe", erklärt Ralf Dümmel.</blockquote>
      
      <ul>
        <li><strong>Großer Markt:</strong> Der Gesundheitsmarkt wächst kontinuierlich</li>
        <li><strong>Wiederkäufe:</strong> Viele Produkte werden regelmäßig nachgekauft</li>
        <li><strong>Emotionale Verbindung:</strong> Kunden haben eine starke Bindung zu Gesundheitsprodukten</li>
        <li><strong>Mundpropaganda:</strong> Zufriedene Kunden empfehlen gerne weiter</li>
      </ul>
      
      <h3>Tech-Produkte auf dem Vormarsch</h3>
      
      <p>Besonders auffällig ist der Anstieg von Tech-Produkten. Intelligente Lösungen für den Alltag finden immer mehr Anklang bei den Investoren:</p>
      
      <ul>
        <li>Smart Home Lösungen</li>
        <li>Gesundheits-Apps</li>
        <li>KI-basierte Services</li>
        <li>Nachhaltige Tech-Innovationen</li>
      </ul>
      
      <h3>Was die Investoren wirklich wollen</h3>
      
      <p>Bei der Analyse der erfolgreichen Deals fallen bestimmte Kriterien auf, die alle Investoren schätzen:</p>
      
      <h4>1. Skalierbarkeit</h4>
      <p>Produkte müssen das Potenzial haben, schnell zu wachsen und große Märkte zu erreichen.</p>
      
      <h4>2. Alleinstellungsmerkmal</h4>
      <p>Innovation und ein klarer Vorteil gegenüber der Konkurrenz sind entscheidend.</p>
      
      <h4>3. Marktvalidierung</h4>
      <p>Erste Verkaufszahlen und Kundenfeedback zeigen, dass das Produkt funktioniert.</p>
      
      <h4>4. Das richtige Team</h4>
      <p>Erfahrene und leidenschaftliche Gründer erhöhen die Erfolgswahrscheinlichkeit erheblich.</p>
      
      <h3>Prognose für die kommenden Folgen</h3>
      
      <p>Basierend auf den bisherigen Trends erwarten wir für die restliche Staffel:</p>
      
      <ul>
        <li>Weitere Gesundheitsprodukte mit innovativen Ansätzen</li>
        <li>Mehr nachhaltige Lösungen in allen Kategorien</li>
        <li>Digitale Services und Apps</li>
        <li>Produkte, die mehrere Zielgruppen ansprechen</li>
      </ul>
      
      <p>Die Höhle der Löwen bleibt spannend und zeigt, wie vielfältig und innovativ die deutsche Gründerszene ist.</p>
    `,
    author: "Ralf Dümmel",
    date: "12. Dez 2024", 
    category: "Analyse",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Frank Thelen über die Zukunft der Startup-Szene",
    excerpt: "Im exklusiven Interview spricht Frank Thelen über seine Vision für deutsche Startups, die Bedeutung von Künstlicher Intelligenz und warum er bei bestimmten Produkten sofort 'ja' sagt. Erfahre mehr über seine Investmentstrategie...",
    content: `
      <h2>Ein exklusives Interview mit dem Tech-Investor</h2>
      
      <p>Frank Thelen gilt als einer der visionärsten Investoren Deutschlands. Im Gespräch mit uns erklärt er, worauf er bei Investments achtet und wie er die Zukunft der deutschen Startup-Szene sieht.</p>
      
      <h3>Herr Thelen, was macht für Sie ein investitionswürdiges Startup aus?</h3>
      
      <blockquote>"Für mich sind drei Faktoren entscheidend: Ein riesiger Markt, ein außergewöhnliches Team und eine Technologie, die wirklich innovativ ist. Wenn diese drei Elemente zusammenkommen, bin ich sehr schnell bereit zu investieren."</blockquote>
      
      <p>Thelen betont dabei besonders die Bedeutung von disruptiven Technologien. "Ich suche nach Unternehmen, die ganze Branchen verändern können, nicht nur kleine Verbesserungen anbieten."</p>
      
      <h3>Welche Rolle spielt Künstliche Intelligenz in Ihrer Investmentstrategie?</h3>
      
      <p>"KI ist definitiv einer der wichtigsten Megatrends unserer Zeit. Aber ich investiere nicht in KI um der KI willen. Entscheidend ist, ob die Technologie ein echtes Problem löst und einen messbaren Mehrwert schafft."</p>
      
      <p>Besonders interessant findet Thelen dabei folgende Bereiche:</p>
      
      <ul>
        <li><strong>Gesundheitswesen:</strong> KI-basierte Diagnostik und Therapieansätze</li>
        <li><strong>Bildung:</strong> Personalisierte Lernplattformen</li>
        <li><strong>Mobilität:</strong> Autonome Fahrzeuge und Smart City Lösungen</li>
        <li><strong>Industrie 4.0:</strong> Optimierung von Produktionsprozessen</li>
      </ul>
      
      <h3>Wie bewerten Sie die deutsche Startup-Szene im internationalen Vergleich?</h3>
      
      <p>"Deutschland hat in den letzten Jahren enormen Fortschritt gemacht. Wir haben viele talentierte Gründer und eine solide Infrastruktur. Was uns manchmal noch fehlt, ist der Mut zu großen Visionen."</p>
      
      <blockquote>"Deutsche Gründer sind oft zu bescheiden. Sie denken zu klein. Wir brauchen mehr Unternehmer, die von Anfang an global denken und große Märkte erobern wollen."</blockquote>
      
      <h3>Was können deutsche Startups von amerikanischen oder chinesischen Unternehmen lernen?</h3>
      
      <p>Thelen sieht vor allem in der Geschwindigkeit und Risikobereitschaft Nachholbedarf:</p>
      
      <ul>
        <li><strong>Schnelligkeit:</strong> "Fail fast, learn fast" als Grundprinzip</li>
        <li><strong>Skalierung:</strong> Von Anfang an auf Wachstum ausgelegt</li>
        <li><strong>Kapital:</strong> Mutig größere Summen für das Wachstum einsetzen</li>
        <li><strong>Netzwerke:</strong> Strategische Partnerschaften frühzeitig aufbauen</li>
      </ul>
      
      <h3>Ihre Prognose: Welche Trends werden die nächsten Jahre prägen?</h3>
      
      <p>"Ich sehe fünf große Trends, die die nächste Dekade bestimmen werden:"</p>
      
      <ol>
        <li><strong>Nachhaltigkeit:</strong> Cleantech und grüne Technologien</li>
        <li><strong>Gesundheit:</strong> Personalisierte Medizin und Präventionsansätze</li>
        <li><strong>Künstliche Intelligenz:</strong> In allen Lebensbereichen</li>
        <li><strong>Space Economy:</strong> Raumfahrt wird kommerziell</li>
        <li><strong>Blockchain:</strong> Dezentrale Systeme gewinnen an Bedeutung</li>
      </ol>
      
      <h3>Ihr Rat an angehende Gründer?</h3>
      
      <blockquote>"Träumt groß, startet klein, skaliert schnell. Und vergesst nie: Das Team ist alles. Die beste Idee ist nichts wert ohne die richtigen Menschen, die sie umsetzen."</blockquote>
      
      <p>Abschließend betont Thelen die Bedeutung von Durchhaltevermögen: "Unternehmertum ist ein Marathon, kein Sprint. Wer bereit ist, langfristig zu denken und durch schwierige Zeiten zu gehen, hat die besten Chancen auf Erfolg."</p>
      
      <h3>Über Frank Thelen</h3>
      
      <p>Frank Thelen ist Gründer der Freigeist Capital und seit Jahren einer der bekanntesten Tech-Investoren Deutschlands. Als Jury-Mitglied der "Höhle der Löwen" hat er bereits in zahlreiche innovative Startups investiert und dabei immer den Fokus auf zukunftsweisende Technologien gelegt.</p>
    `,
    author: "Frank Thelen",
    date: "10. Dez 2024",
    category: "Interview", 
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop",
    readTime: "8 min",
  },
  {
    id: 4,
    title: "5 Tipps für angehende Gründer von Carsten Maschmeyer",
    excerpt: "Was macht ein erfolgreiches Pitch aus? Carsten Maschmeyer verrät seine wichtigsten Tipps für Gründer, die bei den Löwen punkten wollen. Von der Vorbereitung bis zur Verhandlung - hier sind die Erfolgsgeheimnisse...",
    content: `
      <h2>Erfolgsrezepte vom erfahrenen Investor</h2>
      
      <p>Carsten Maschmeyer hat in seiner Karriere als Investor schon hunderte Pitches erlebt. Als einer der erfahrensten Löwen weiß er genau, worauf es ankommt. Im folgenden Artikel teilt er seine wertvollsten Erkenntnisse mit angehenden Gründern.</p>
      
      <h3>Tipp 1: Die perfekte Vorbereitung</h3>
      
      <blockquote>"90% des Erfolgs liegen in der Vorbereitung. Wer nicht vorbereitet ist, hat bereits verloren."</blockquote>
      
      <p>Maschmeyer betont, wie wichtig eine gründliche Vorbereitung ist:</p>
      
      <h4>Das gehört zur Grundausstattung:</h4>
      <ul>
        <li><strong>Businessplan:</strong> Detailliert, aber verständlich</li>
        <li><strong>Finanzprognosen:</strong> Realistisch und gut begründet</li>
        <li><strong>Marktanalyse:</strong> Zielgruppe und Konkurrenz genau kennen</li>
        <li><strong>Produktdemonstration:</strong> Das Produkt erlebbar machen</li>
        <li><strong>Exit-Strategie:</strong> Wie kann der Investor wieder aussteigen?</li>
      </ul>
      
      <h4>Häufige Vorbereitungsfehler:</h4>
      <ul>
        <li>Zu optimistische Prognosen</li>
        <li>Unkenntnis über die Konkurrenz</li>
        <li>Fehlende Kostenrechnung</li>
        <li>Keine klare Positionierung</li>
      </ul>
      
      <h3>Tipp 2: Die ersten 60 Sekunden entscheiden</h3>
      
      <p>"In den ersten 60 Sekunden entscheide ich, ob ich weiterhöre oder innerlich bereits ausgestiegen bin", erklärt Maschmeyer. Diese Zeit ist absolut kritisch.</p>
      
      <h4>So gelingt der perfekte Einstieg:</h4>
      <ol>
        <li><strong>Problem klar definieren:</strong> Was ist das Problem, das Sie lösen?</li>
        <li><strong>Lösung prägnant darstellen:</strong> Wie lösen Sie es?</li>
        <li><strong>Marktgröße benennen:</strong> Wie groß ist der Markt?</li>
        <li><strong>Alleinstellungsmerkmal:</strong> Was macht Sie einzigartig?</li>
        <li><strong>Erfolg beweisen:</strong> Erste Kunden oder Umsätze zeigen</li>
      </ol>
      
      <blockquote>"Wer in 60 Sekunden nicht erklären kann, worum es geht, hat das Geschäftsmodell selbst nicht verstanden."</blockquote>
      
      <h3>Tipp 3: Zahlen, Daten, Fakten</h3>
      
      <p>Maschmeyer ist bekannt dafür, sehr detailliert nach Zahlen zu fragen. Gründer sollten auf alles eine Antwort haben:</p>
      
      <h4>Diese Kennzahlen müssen Sie kennen:</h4>
      <ul>
        <li><strong>Customer Acquisition Cost (CAC):</strong> Was kostet ein neuer Kunde?</li>
        <li><strong>Lifetime Value (LTV):</strong> Was bringt ein Kunde über die gesamte Zeit?</li>
        <li><strong>Monthly Recurring Revenue (MRR):</strong> Wiederkehrende monatliche Umsätze</li>
        <li><strong>Burn Rate:</strong> Wie viel Geld verbrauchen Sie monatlich?</li>
        <li><strong>Gross Margin:</strong> Wie hoch ist Ihre Bruttomarge?</li>
      </ul>
      
      <h3>Tipp 4: Authentizität schlägt Perfektionismus</h3>
      
      <p>"Ich investiere in Menschen, nicht nur in Ideen. Wer authentisch ist und Leidenschaft zeigt, punktet bei mir", so Maschmeyer.</p>
      
      <h4>Was Authentizität ausmacht:</h4>
      <ul>
        <li><strong>Ehrlichkeit:</strong> Probleme und Schwächen offen ansprechen</li>
        <li><strong>Leidenschaft:</strong> Für das eigene Produkt brennen</li>
        <li><strong>Lernbereitschaft:</strong> Feedback annehmen können</li>
        <li><strong>Realismus:</strong> Nicht jedes Problem kleinreden</li>
      </ul>
      
      <blockquote>"Perfekte Gründer gibt es nicht. Aber Gründer, die aus Fehlern lernen und weitermachen - das sind die Gewinner."</blockquote>
      
      <h3>Tipp 5: Die Verhandlung richtig führen</h3>
      
      <p>Wenn ein Investor Interesse zeigt, beginnt die eigentliche Arbeit: die Verhandlung.</p>
      
      <h4>Maschmeyers Verhandlungstipps:</h4>
      
      <ol>
        <li><strong>Flexibilität zeigen:</strong> Nicht stur an der ersten Bewertung festhalten</li>
        <li><strong>Win-Win suchen:</strong> Für beide Seiten vorteilhafte Lösungen finden</li>
        <li><strong>Mehr als Geld:</strong> Expertise und Netzwerk des Investors wertschätzen</li>
        <li><strong>Zeitdruck vermeiden:</strong> Nicht zu schnell entscheiden müssen</li>
        <li><strong>Alternativen haben:</strong> Nicht nur auf einen Investor setzen</li>
      </ol>
      
      <h4>Typische Verhandlungsfehler:</h4>
      <ul>
        <li>Zu hohe Bewertung ohne Begründung</li>
        <li>Kein Verhandlungsspielraum</li>
        <li>Nur aufs Geld schauen</li>
        <li>Emotionale Entscheidungen</li>
      </ul>
      
      <h3>Bonus-Tipp: Nach dem Pitch ist vor dem Pitch</h3>
      
      <p>"Auch wenn ein Pitch nicht erfolgreich war, ist das kein Grund aufzugeben. Ich habe schon Gründer erlebt, die beim dritten Anlauf erfolgreich waren", ermutigt Maschmeyer.</p>
      
      <h4>Was nach einem gescheiterten Pitch zu tun ist:</h4>
      <ul>
        <li>Feedback ernst nehmen und umsetzen</li>
        <li>An den kritisierten Punkten arbeiten</li>
        <li>Neue Zahlen sammeln</li>
        <li>Bei Verbesserungen wieder vorstellig werden</li>
      </ul>
      
      <h3>Fazit</h3>
      
      <p>"Gründen ist kein Sprint, sondern ein Marathon. Wer bereit ist, hart zu arbeiten, von anderen zu lernen und auch mal Rückschläge zu verkraften, hat alle Chancen auf Erfolg", fasst Carsten Maschmeyer zusammen.</p>
      
      <blockquote>"Der beste Zeitpunkt, ein Unternehmen zu gründen, war vor 20 Jahren. Der zweitbeste ist heute."</blockquote>
      
      <p>Mit diesen fünf Tipps sind angehende Gründer bestens gerüstet für ihren Auftritt in der Höhle der Löwen - oder bei jedem anderen Investor.</p>
    `,
    author: "Carsten Maschmeyer",
    date: "8. Dez 2024",
    category: "Tipps",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop",
    readTime: "10 min",
  },
];

// Legal Pages Content
const legalPagesContent = {
  "AGB": {
    title: "AGB – Allgemeine Geschäftsbedingungen",
    content: `
      <h2><strong>1. Geltungsbereich</strong></h2>
      <p>Diese AGB regeln die Nutzung der Website search-a.shop und der dort bereitgestellten Inhalte/Funktionen. Abweichende Bedingungen der Nutzer finden keine Anwendung.</p>

      <h2><strong>2. Leistungsbeschreibung / Rolle dieser Website</strong></h2>
      <p> (1) Wir sind eine <strong>Informations- und Vermittlungsseite</strong>; wir <strong>verkaufen nicht selbst</strong>.</p>
      <p> (2) Wir sind <strong>kein Hersteller oder Händler</strong> der vorgestellten Produkte.</p>
      <p> (3) Kommt ein Kauf zustande, erfolgt dieser <strong>ausschließlich</strong> zwischen dir und dem <strong>jeweiligen externen Anbieter</strong>. Es gelten <strong>dessen</strong> AGB, Widerrufs-, Liefer-, Zahlungs- und Gewährleistungsbedingungen.</p>
      <p> (4) <strong>Kein Kundendienst</strong> für Drittanbieter: Reklamationen, Rücksendungen, Widerruf, Garantie/Gewährleistung bitte direkt beim Anbieter.</p>

      <h2><strong>3. Affiliate-Links / Werbekennzeichnung / redaktionelle Unabhängigkeit</strong></h2>
      <p> (1) Unsere Beiträge enthalten <strong>Affiliate-Links</strong>. Bei qualifizierten Käufen erhalten wir eine Provision; der Preis für dich bleibt unverändert.</p>
      <p> (2) Für Amazon gilt zusätzlich: <em>„Als Amazon-Partner verdienen wir an qualifizierten Verkäufen."</em></p>
      <p> (3) <strong>Redaktionelle Unabhängigkeit:</strong> Die Auswahl/Bewertung erfolgt unabhängig von Affiliate-Beziehungen.</p>

      <h2><strong>4. Preise, Verfügbarkeit, Irrtumsvorbehalt</strong></h2>
      <p> (1) Angaben zu Preisen, Versandkosten, Lieferzeiten und Verfügbarkeiten stammen i. d. R. vom externen Anbieter und können sich kurzfristig ändern. <strong>Maßgeblich sind ausschließlich</strong> die Angaben auf der Zielseite des Anbieters.</p>
      <p> (2) <strong>Alle Angaben ohne Gewähr; Änderungen und Irrtümer vorbehalten.</strong></p>

      <h2><strong>5. Defekte Links / nicht mehr verfügbare Produkte</strong></h2>
      <p> Bitte melde fehlerhafte/veraltete Links oder nicht mehr verfügbare Artikel über unseren <strong>Kontakt-Button auf der Website</strong>. Wir aktualisieren nach Prüfung.</p>

      <h2><strong>6. Keine Zugehörigkeit / Bewerbungen</strong></h2>
      <p> Keine Kooperation oder Zugehörigkeit zu „Die Höhle der Löwen", VOX/RTL, Sony o. ä. Wir nehmen <strong>keine</strong> Bewerbungen an und leiten sie <strong>nicht</strong> weiter. Nutze die <strong>offiziellen Bewerbungswege</strong> der Produktion: <a href="https://endemolshine.de/casting/die-hoehle-der-loewen/" target="_blank">https://endemolshine.de/casting/die-hoehle-der-loewen/</a>.</p>

      <h2><strong>7. Kein E-Mail-Marketing / Anti-Phishing</strong></h2>
      <p> Wir betreiben <strong>kein</strong> E-Mail-Marketing. Erhältst du Werbe-Mails im Namen der Show/Seite, stammen diese <strong>nicht</strong> von uns.</p>

      <h2><strong>8. Haftung</strong></h2>
      <p> (1) Für <strong>eigene</strong> Inhalte haften wir nach den gesetzlichen Vorschriften.</p>
      <p> (2) Für Inhalte externer Websites sind ausschließlich deren Betreiber verantwortlich.</p>
      <p> (3) Bei <strong>leichter Fahrlässigkeit</strong> haften wir nur bei Verletzung <strong>wesentlicher Vertragspflichten</strong> (Kardinalpflichten) und beschränkt auf den <strong>vorhersehbaren, typischen Schaden</strong>. Unberührt bleiben Haftung für Leben, Körper, Gesundheit sowie nach dem Produkthaftungsgesetz.</p>

      <h2><strong>9. Urheber-/Markenrechte</strong></h2>
      <p> Eigene Inhalte (Texte, Bilder, Layout) sind urheberrechtlich geschützt. Nutzung nur mit vorheriger Zustimmung, soweit nicht gesetzlich erlaubt. Genannte Marken/Logos bleiben Eigentum der jeweiligen Rechteinhaber.</p>

      <h2><strong>10. Verbraucherinformation / Streitbeilegung</strong></h2>
      <p> Wir sind <strong>nicht bereit und nicht verpflichtet</strong>, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).</p>

      <h2><strong>11. Schlussbestimmungen</strong></h2>
      <p> Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Sofern du Kaufmann bist, ist Gerichtsstand [Sitz des Anbieters]. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Regelungen unberührt.</p>

      <p><strong>Zuletzt aktualisiert:</strong> August 2025</p>
    `
  },
  "Datenschutz": {
    title: "Datenschutzerklärung",
    content: `
      <h2><strong>Verantwortlicher</strong></h2>
      <p>iCompetence GmbH<br>
      Weidenallee 10c, 20357 Hamburg</p>

      <h2><strong>Kontakt</strong></h2>
      <p>E-Mail: info@iCompetence.de</p>
      <p>Telefon: +49 40 609 45 51 – 0<br>
      Fax: +49 40 609 45 51 – 99</p>

      <h2><strong>Zwecke & Rechtsgrundlagen</strong></h2>
      <ul>
        <li><strong>Betrieb/IT-Sicherheit</strong> (z. B. Server-Logs): Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</li>
        <li><strong>Consent-basierte Technologien</strong> (Cookies/IDs) für <strong>Affiliate-Tracking</strong> und ggf. <strong>Statistik/Marketing</strong> <strong>nur nach Einwilligung</strong>: Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 TTDSG.</li>
        <li><strong>Kommunikation</strong> (z. B. „defekte Links melden" per Formular/E-Mail): Art. 6 Abs. 1 lit. b oder lit. f DSGVO.</li>
      </ul>

      <h2><strong>Server-Logfiles</strong></h2>
      <p>Verarbeitet werden IP-Adresse, Datum/Uhrzeit, aufgerufene URL, Referrer-URL, User-Agent, Statuscodes. Zweck: Betrieb/Fehleranalyse/Sicherheit. Löschung nach [z. B. 14–30 Tagen].</p>

      <h2><strong>Cookies & ähnliche Technologien (TTDSG)</strong></h2>
      <ul>
        <li><strong>Technisch notwendig</strong> (z. B. Consent-Speicherung, Lastverteilung).</li>
        <li><strong>Nicht notwendig (Opt-In)</strong>: Affiliate-Tracking, ggf. Statistik/Marketing. Diese werden <strong>erst nach Einwilligung</strong> gesetzt/ausgeführt. Ein Widerruf ist jederzeit über <strong>[Cookie-Einstellungen-Link]</strong> möglich.</li>
      </ul>

      <h2><strong>Affiliate-Programme (inkl. Amazon PartnerNet)</strong></h2>
      <p>Wir nehmen an Affiliate-Programmen teil. Beim Klick auf Affiliate-Links können die jeweiligen Anbieter Cookies/ähnliche IDs setzen, um die <strong>Herkunft von Bestellungen</strong> zuzuordnen.</p>
      <p>Für Amazon gilt: <em>„Als Amazon-Partner verdienen wir an qualifizierten Verkäufen."</em></p>
      <p>Bitte beachte die Datenschutzhinweise des jeweiligen Anbieters (z. B. Amazon).</p>

      <h2><strong>Kein E-Mail-Marketing / Anti-Phishing</strong></h2>
      <p>Wir betreiben <strong>kein Newsletter-/E-Mail-Marketing</strong>. Erhältst du Mails im Namen der Show oder dieser Website, stammen diese <strong>nicht</strong> von uns. Öffne keine verdächtigen Links/Anhänge und informiere deinen E-Mail-Provider; du kannst uns die Nachricht zur Prüfung weiterleiten: dhdl@icompetence.de.</p>

      <h2><strong>Kontakt / „Defekte Links melden"</strong></h2>
      <p>Bei Kontaktaufnahme verarbeiten wir die von dir angegebenen Daten (z. B. Name, E-Mail, Nachricht, betroffene Produkt-/Seiten-URL, optional Screenshot). Zweck: Bearbeitung deiner Anfrage/Fehlermeldung. Löschung: sobald abgeschlossen bzw. nach [z. B. 6 Monaten] Prüf-/Nachweisfrist.</p>

      <h2><strong>Externe Links</strong></h2>
      <p>Unsere Inhalte verlinken auf <strong>externe Websites</strong>. Für deren Inhalte und Datenverarbeitung sind ausschließlich die jeweiligen Anbieter verantwortlich.</p>

      <h2><strong>Auftragsverarbeiter & Empfänger</strong> (Art. 28 DSGVO)</h2>
      <p>Dienstleisterliste (Beispiel/Platzhalter):</p>
      <ul>
        <li>Hosting: [Anbieter, Sitzland]</li>
        <li>Consent-Tool: [Anbieter, Sitzland]</li>
        <li>(Optional) Webanalyse: [Toolname], <strong>nur nach Opt-In</strong>.</li>
      </ul>

      <h2><strong>Drittlandtransfer</strong></h2>
      <p>Sofern Dienste Daten in Drittländer (z. B. USA) übertragen, nutzen wir geeignete Garantien (z. B. EU-Standardvertragsklauseln) und aktivieren diese Dienste <strong>erst nach Einwilligung</strong>.</p>

      <h2><strong>Speicherdauer</strong></h2>
      <p>Speichern nur solange wie erforderlich bzw. gesetzlich vorgeschrieben. Cookie-Laufzeiten siehe Consent-Manager.</p>

      <h2><strong>Deine Rechte</strong></h2>
      <p>Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch sowie <strong>Widerruf</strong> erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO).<br>
      Beschwerde: bei einer Datenschutzaufsichtsbehörde (z. B. deines Bundeslandes).</p>

      <h2><strong>Pflicht zur Bereitstellung</strong></h2>
      <p>Keine gesetzliche Pflicht. Ohne bestimmte Angaben kann die Nutzung einzelner Funktionen eingeschränkt sein.</p>

      <h2><strong>Sicherheit</strong></h2>
      <p>TLS-Verschlüsselung und organisatorische Maßnahmen zum Schutz deiner Daten.</p>

      <p><strong>Zuletzt aktualisiert:</strong> August 2025</p>
    `
  },
  "Impressum": {
    title: "Impressum",
    content: `
      <h2><strong>Angaben gemäß § 5 DDG und § 18 MStV</strong></h2>

      <h3><strong>Anbieter:</strong></h3>
      <p>iCompetence GmbH<br>
      Weidenallee 10c, 20357 Hamburg</p>

      <h3><strong>Kontakt:</strong></h3>
      <p>E-Mail: <a href="mailto:info@iCompetence.de">info@iCompetence.de</a></p>
      <p>Telefon: +49 40 609 45 51 – 0<br>
      Fax: +49 40 609 45 51 – 99</p>

      <h3><strong>Vertretungsberechtigte Person(en):</strong></h3>
      <p>Matthias Postel</p>

      <h3><strong>Registereintrag:</strong></h3>
      <p>Eintragung im Handelsregister.</p>
      <p>Registergericht: Amtsgericht Hamburg<br>
      Registernummer: HRB 110059</p>
      <p>Umsatzsteuer-Nr: 42/733/00396<br>
      Umsatzsteuer-ID: DE 265 683 841</p>

      <h3><strong>Inhaltlich verantwortlich i. S. d. § 18 Abs. 2 MStV</strong> (nur bei journalistisch-redaktionellen Inhalten):</h3>
      <p>[Name, Anschrift]</p>

      <hr>

      <h2><strong>Hinweise</strong></h2>

      <h3><strong>Unabhängigkeit / Markenrechte</strong></h3>
      <p>Wir sind eine <strong>unabhängige Informations- und Vermittlungsseite</strong>. Es besteht <strong>keine</strong> Kooperation, kein Sponsoring und keine Zugehörigkeit zu „Die Höhle der Löwen", VOX/RTL, Sony oder den Produzenten der Sendung. Genannte Marken/Logos sind Eigentum der jeweiligen Rechteinhaber.</p>

      <h3><strong>Kein Onlineshop, kein Hersteller/Händler</strong></h3>
      <p>Wir <strong>verkaufen nicht selbst</strong> und sind <strong>kein Hersteller oder Händler</strong> der gezeigten Produkte. Käufe erfolgen <strong>ausschließlich</strong> bei den verlinkten Shops/Anbietern. <strong>Reklamation, Widerruf, Gewährleistung, Lieferung und Zahlung</strong> bitte direkt dort klären.</p>

      <h3><strong>Affiliate-Transparenz & redaktionelle Unabhängigkeit</strong></h3>
      <p>Diese Website verwendet <strong>Affiliate-Links</strong>. Bei qualifizierten Käufen erhalten wir eine Provision; <strong>der Preis für dich ändert sich nicht</strong>.</p>
      <p>Für Amazon gilt zusätzlich: <em>„Als Amazon-Partner verdienen wir an qualifizierten Verkäufen."</em></p>
      <p>Unsere <strong>redaktionelle Auswahl</strong> bleibt von Affiliate-Beziehungen <strong>unberührt</strong>.</p>

      <h3><strong>Defekte Links melden</strong></h3>
      <p>Nicht verfügbare Produkte oder fehlerhafte/veraltete Links? Bitte über die <strong>E-Mail-Adresse</strong> (<a href="mailto:dhdl@icompetence.de">dhdl@icompetence.de</a>) oder den Kontakt-Button auf der Website an uns melden.</p>

      <h3><strong>Bewerbungen zur Sendung</strong></h3>
      <p>Wir nehmen <strong>keine</strong> Bewerbungen an und leiten solche <strong>nicht</strong> weiter. Bitte nutze die <strong>offiziellen Bewerbungswege</strong> der Produktion: <a href="https://endemolshine.de/casting/die-hoehle-der-loewen/" target="_blank">https://endemolshine.de/casting/die-hoehle-der-loewen/</a>.</p>

      <h3><strong>Anti-Phishing</strong></h3>
      <p>Wir betreiben <strong>kein E-Mail-Marketing</strong> und versenden <strong>keine</strong> unaufgeforderten Werbe-Mails. Erhältst du Mails im Namen der Show oder dieser Website, stammen diese <strong>nicht</strong> von uns.</p>

      <h3><strong>Verbraucherstreitbeilegung (§ 36 VSBG)</strong></h3>
      <p>Wir sind <strong>nicht bereit und nicht verpflichtet</strong>, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. <em>(Hinweis: Die frühere EU-ODR-Plattform ist eingestellt.)</em></p>

      <h3><strong>Irrtumsvorbehalt</strong></h3>
      <p>Alle Angaben ohne Gewähr; <strong>Preise und Verfügbarkeiten</strong> können sich kurzfristig ändern. Maßgeblich sind die Informationen auf der verlinkten Anbieterseite.</p>

      <p><strong>Zuletzt aktualisiert:</strong> August 2025</p>
    `
  },
  "FAQ": {
    title: "FAQ – Häufig gestellte Fragen",
    content: null, // Will be handled by special FAQ component
    faqItems: [
      {
        id: 1,
        question: "Seid ihr der offizielle Shop von \"Die Höhle der Löwen\"?",
        answer: "Nein. Wir sind eine <strong>unabhängige Informations- und Vermittlungsseite</strong> und <strong>nicht</strong> mit der Sendung oder den Rechteinhabern verbunden."
      },
      {
        id: 2,
        question: "Verkauft ihr die Produkte selbst?",
        answer: "Nein. Wir <strong>verlinken</strong> auf die Shops der jeweiligen Anbieter. Der Kaufvertrag kommt <strong>dort</strong> zustande."
      },
      {
        id: 3,
        question: "Seid ihr Hersteller oder Händler der Produkte?",
        answer: "Nein. Wir sind <strong>kein Hersteller oder Händler</strong>. <strong>Reklamation, Widerruf, Gewährleistung, Lieferung und Zahlung</strong> bitte direkt mit dem jeweiligen Anbieter klären."
      },
      {
        id: 4,
        question: "An wen wende ich mich bei Fragen zu Bestellung, Lieferung, Rückgabe oder Garantie?",
        answer: "Bitte <strong>direkt</strong> an den jeweiligen Anbieter/Shop (Kontaktdaten findest du auf der Zielseite)."
      },
      {
        id: 5,
        question: "Was sind Affiliate-Links? Entstehen mir dadurch Mehrkosten?",
        answer: "Bei einigen Links handelt es sich um Affiliate-Links. Tätigst du nach einem Klick einen <strong>qualifizierten Kauf</strong>, erhalten wir eine Provision — <strong>ohne Mehrkosten</strong> für dich. Für Amazon gilt: <em>\"Als Amazon-Partner verdienen wir an qualifizierten Verkäufen.\"</em>"
      },
      {
        id: 6,
        question: "Beeinflussen Affiliate-Links eure Empfehlungen?",
        answer: "Nein. Unsere <strong>redaktionelle Unabhängigkeit</strong> bleibt unberührt. Werbung kennzeichnen wir transparent."
      },
      {
        id: 7,
        question: "Warum werden Cookies/ähnliche Technologien verwendet?",
        answer: "Für technisch notwendige Funktionen (z. B. Consent-Speicherung). Für Affiliate-Tracking und ggf. Statistik/Marketing <strong>nur mit deiner Einwilligung</strong>. Du kannst deine Einwilligungen jederzeit in den <strong>[Cookie-Einstellungen]</strong> ändern (siehe <strong>Datenschutzerklärung</strong>)."
      },
      {
        id: 8,
        question: "Preise/Verfügbarkeiten stimmen nicht – wieso?",
        answer: "Preise und Lagerbestände können sich schnell ändern. Verbindlich sind <strong>immer</strong> die Angaben auf der Zielseite des Anbieters. Melde uns gern veraltete Infos."
      },
      {
        id: 9,
        question: "Wie melde ich defekte Links oder nicht mehr verfügbare Produkte?",
        answer: "Über unseren <strong>Kontakt-Button oder direkt per Mail (dhdl@icompetence.de)</strong>. Bitte nenne Produktname, betroffene URL und ggf. einen Screenshot."
      },
      {
        id: 10,
        question: "Versendet ihr Newsletter oder Werbe-Mails?",
        answer: "Nein. Wir betreiben <strong>kein E-Mail-Marketing</strong> und versenden <strong>keine</strong> unaufgeforderten Werbe-Mails. Erhältst du eine verdächtige E-Mail im Namen der Show/Seite, stammt sie <strong>nicht</strong> von uns (Phishing-Verdacht)."
      },
      {
        id: 11,
        question: "Kann ich mich über euch bei \"Die Höhle der Löwen\" bewerben?",
        answer: "Nein. Wir nehmen <strong>keine</strong> Bewerbungen an und leiten sie nicht weiter. Nutze bitte die <strong>offiziellen Bewerbungswege</strong>: <a href=\"https://endemolshine.de/casting/die-hoehle-der-loewen/\" target=\"_blank\">https://endemolshine.de/casting/die-hoehle-der-loewen/</a>."
      },
      {
        id: 12,
        question: "Presse/Kontakt",
        answer: "Für Presse- oder Kooperationsanfragen: <strong>[Presse-/Kontakt-E-Mail]</strong>."
      },
      {
        id: 13,
        question: "Datenschutz",
        answer: "Wie wir mit Daten umgehen, steht in unserer <strong>Datenschutzerklärung</strong> — inkl. Infos zu Cookies, Einwilligungen und deinen Rechten."
      }
    ]
  }
};

// Dummy Höhle der Löwen Produkte
const dummyProducts = [
  {
    id: 1,
    name: "BIOM8",
    description:
      "Probiotische Nahrungsergänzung für die Darmgesundheit mit 8 verschiedenen Bakterienstämmen",
    price: "49,90",
    originalPrice: "69,90",
    investor: "Judith Williams",
    season: "Staffel 12",
    image:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 1247,
    category: "Gesundheit & Beauty",
    product_url: "https://example.com/biom8",
  },
  {
    id: 2,
    name: "Ankerkraut",
    description:
      "Premium Gewürzmischungen und Grillrubs für außergewöhnliche Geschmackserlebnisse",
    price: "12,90",
    originalPrice: null,
    investor: "Frank Thelen",
    season: "Staffel 6",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 2156,
    category: "Küche & Haushalt",
    product_url: "https://example.com/ankerkraut",
  },
  {
    id: 3,
    name: "Waterdrop",
    description:
      "Microdrinks: Natürliche Vitamine und Geschmack für dein Wasser - ohne Zucker",
    price: "29,99",
    originalPrice: "39,99",
    investor: "Ralf Dümmel",
    season: "Staffel 9",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 892,
    category: "Gesundheit & Fitness",
  },
  {
    id: 4,
    name: "KLEAN KANTEEN",
    description:
      "Nachhaltige Edelstahl-Trinkflaschen für umweltbewusste Menschen",
    price: "34,95",
    originalPrice: null,
    investor: "Dagmar Wöhrl",
    season: "Staffel 8",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 1563,
    category: "Sport & Outdoor",
  },
  {
    id: 5,
    name: "SNOCKS",
    description:
      "Nachhaltige Socken und Unterwäsche aus Bio-Baumwolle - fair produziert",
    price: "19,95",
    originalPrice: "24,95",
    investor: "Nils Glagau",
    season: "Staffel 7",
    image:
      "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 2341,
    category: "Fashion & Lifestyle",
  },
  // Staffel 16 Produkte
  {
    id: 6,
    name: "CleanKids",
    description:
      "��kologische Kinderprodukte und Spielwaren aus nachhaltigen Materialien",
    price: "24,90",
    originalPrice: "29,90",
    investor: "Carsten Maschmeyer",
    season: "Staffel 16",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 1834,
    category: "Kinder & Familie",
  },
  {
    id: 7,
    name: "FitFood",
    description:
      "Gesunde Fertiggerichte ohne Zusatzstoffe - frisch und nährstoffreich",
    price: "8,95",
    originalPrice: null,
    investor: "Judith Williams",
    season: "Staffel 16",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    rating: 4.3,
    reviews: 967,
    category: "Food & Beverage",
  },
  {
    id: 8,
    name: "SmartHome Pro",
    description:
      "Intelligente Hausautomation für mehr Komfort und Energieeffizienz",
    price: "149,00",
    originalPrice: "199,00",
    investor: "Frank Thelen",
    season: "Staffel 16",
    image:
      "https://images.unsplash.com/photo-1558618047-fcd9c4d4b96a?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 2567,
    category: "Tech & Innovation",
  },
  {
    id: 9,
    name: "GreenClean",
    description:
      "Umweltfreundliche Reinigungsmittel auf Basis natürlicher Inhaltsstoffe",
    price: "16,90",
    originalPrice: "21,90",
    investor: "Ralf Dümmel",
    season: "Staffel 16",
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 1456,
    category: "Küche & Haushalt",
  },
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] =
    useState<File | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [showSplitScreen, setShowSplitScreen] = useState(false);
  const [searchMethod, setSearchMethod] = useState<
    "text" | "image" | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] =
    useState<typeof dummyProducts>([]);
  const [originalSearchResults, setOriginalSearchResults] =
    useState<typeof dummyProducts>([]);
  const [allProductsCache, setAllProductsCache] = 
    useState<typeof dummyProducts | null>(null);
  const [allProductsLoaded, setAllProductsLoaded] = useState(false);
  const [currentSearchTerm, setCurrentSearchTerm] =
    useState("");
  const [searchHistory, setSearchHistory] = useState<Array<{
    term: string;
    timestamp: number;
    method: "text" | "image" | null;
    imageUrl?: string;
  }>>([]);
  const [responseHistory, setResponseHistory] = useState<Array<{
    searchTerm: string;
    resultCount: number;
    timestamp: number;
    isLoading: boolean;
  }>>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    seasons: [] as string[],
    episodes: [] as string[],
    investors: [] as string[],
    categories: [] as string[],
    brands: [] as string[],
    priceRange: "all" as string,
    popular: false,
  });
  const [splitScreenSearchQuery, setSplitScreenSearchQuery] =
    useState("");
  const [showProductSearch, setShowProductSearch] =
    useState(true);
  const [dropdowns, setDropdowns] = useState({
    staffeln: false,
    investoren: false,
    kategorien: false,
    marken: false,
  });
  const [filterDropdowns, setFilterDropdowns] = useState({
    staffel: false,
    folge: false,
    investor: false,
    kategorie: false,
    marke: false,
    preis: false,
  });
  const [showMenu, setShowMenu] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [showLegalPage, setShowLegalPage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTabletPortrait, setIsTabletPortrait] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [expandedFAQs, setExpandedFAQs] = useState<Set<number>>(new Set());

  const toggleFAQ = (id: number) => {
    const newExpanded = new Set(expandedFAQs);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedFAQs(newExpanded);
  };
  const [showContactModal, setShowContactModal] = useState(false);
  const [previousState, setPreviousState] = useState<{
    showSplitScreen: boolean;
    showBlog: boolean;
    selectedArticle: number | null;
    currentSearchTerm: string;
    filteredProducts: typeof dummyProducts;
    showProductSearch: boolean;
  } | null>(null);

  const toggleFilterDropdown = (dropdown: keyof typeof filterDropdowns) => {
    setFilterDropdowns(prev => ({
      staffel: false,
      folge: false,
      investor: false,
      kategorie: false,
      marke: false,
      preis: false,
      [dropdown]: !prev[dropdown],
    }));
  };

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Auto-scroll when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [searchHistory, responseHistory]);

  // Auto-scroll when loading state changes
  useEffect(() => {
    if (!isLoading) {
      setTimeout(scrollToBottom, 100); // Small delay to ensure DOM is updated
    }
  }, [isLoading]);

  // Clean up object URLs when component unmounts
  useEffect(() => {
    return () => {
      searchHistory.forEach(search => {
        if (search.imageUrl) {
          URL.revokeObjectURL(search.imageUrl);
        }
      });
    };
  }, [searchHistory]);

  // Mobile detection
  useEffect(() => {
    const checkViewportType = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setIsMobile(width < 768);
      
      // Detect tablet portrait: width between 768-1023px and height > width
      setIsTabletPortrait(width >= 768 && width <= 1023 && height > width);
    };
    
    checkViewportType();
    window.addEventListener('resize', checkViewportType);
    
    return () => window.removeEventListener('resize', checkViewportType);
  }, []);

  // Format investor display based on number of investors
  const formatInvestorDisplay = (investorString: string): string => {
    if (!investorString) return "";
    
    // Split by common separators (& and ,)
    const investors = investorString
      .split(/[&,]+/)
      .map(inv => inv.trim())
      .filter(inv => inv.length > 0);
    
    const count = investors.length;
    
    if (count === 0) return "";
    if (count === 1) return `Investor: ${investors[0]}`;
    if (count === 2) return `Investors: ${investors[0]} & ${investors[1]}`;
    if (count === 3) return `Investors: ${investors[0]}, ${investors[1]} & ${investors[2]}`;
    
    // More than 3 investors
    return `Investors: u.a. ${investors[0]}, ${investors[1]} & ${investors[2]}`;
  };

  const handleSearch = async () => {
    if (searchQuery.trim() || selectedImage) {
      // Load all products if not already loaded (for first search)
      if (!allProductsCache) {
        await loadAllProducts();
      }

      setSearchMethod(selectedImage ? "image" : "text");
      const searchTerm = searchQuery || selectedImage?.name || "";
      setCurrentSearchTerm(searchTerm);
      
      // Add to search history
      const timestamp = Date.now();
      const imageUrl = selectedImage ? URL.createObjectURL(selectedImage) : undefined;
      
      
      setSearchHistory(prev => [...prev, {
        term: searchTerm,
        timestamp,
        method: selectedImage ? "image" : "text",
        imageUrl
      }]);
      
      // Add loading response to history
      setResponseHistory(prev => [...prev, {
        searchTerm: searchTerm,
        resultCount: 0,
        timestamp,
        isLoading: true
      }]);
      
      setShowSplitScreen(true);
      setShowProductSearch(true);
      setIsLoading(true);
      
      // Open chat window on mobile when searching from search bar
      if (isMobile) {
        setIsChatOpen(true);
      }

      try {
        let apiResponse;
        
        if (selectedImage && searchQuery.trim()) {
          // Combined search
          const imageBase64 = await apiService.convertFileToBase64(selectedImage);
          apiResponse = await apiService.searchByTextAndImage(searchQuery.trim(), imageBase64, 0.5);
        } else if (selectedImage) {
          // Image only search
          const imageBase64 = await apiService.convertFileToBase64(selectedImage);
          apiResponse = await apiService.searchByImage(imageBase64, 0.4);
        } else if (searchQuery.trim()) {
          // Text only search with semantic enhancement
          console.log(`🚀 Starting semantic search for: "${searchQuery.trim()}"`);
          apiResponse = await SemanticSearchService.search(searchQuery.trim());
        }

        if (apiResponse && apiResponse.results) {
          const mappedProducts = ProductMapper.mapApiProductsToDummy(apiResponse.results);
          setFilteredProducts(mappedProducts);
          setOriginalSearchResults(mappedProducts);
          
          // Update response history with result count
          setResponseHistory(prev => 
            prev.map((response, index) => 
              index === prev.length - 1 
                ? { ...response, resultCount: mappedProducts.length, isLoading: false }
                : response
            )
          );
        } else {
          setFilteredProducts([]);
          setOriginalSearchResults([]);
          
          // Update response history with 0 results
          setResponseHistory(prev => 
            prev.map((response, index) => 
              index === prev.length - 1 
                ? { ...response, resultCount: 0, isLoading: false }
                : response
            )
          );
        }
      } catch (error) {
        console.error('Search error:', error);
        // Show empty results on API error
        setFilteredProducts([]);
        
        // Update response history with error
        setResponseHistory(prev => 
          prev.map((response, index) => 
            index === prev.length - 1 
              ? { ...response, resultCount: 0, isLoading: false }
              : response
          )
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleCurrentSeasonClick = async () => {
    const currentSeason = availableStaffeln.length > 0 ? availableStaffeln[0] : "Staffel 17";
    console.log(`🎯 Current Season clicked: "${currentSeason}" - using LOCAL filtering`);
    
    setCurrentSearchTerm(`Aktuelle Staffel (${currentSeason})`);
    setSearchMethod("text");
    setShowSplitScreen(true);
    setShowProductSearch(false);
    setIsLoading(true);

    try {
      // Ensure all products are loaded first
      if (!allProductsCache) {
        console.log('🔵 No products cached, loading all products first...');
        await loadAllProducts();
        if (!allProductsCache) {
          console.log('❌ Failed to load products for current season filtering');
          setFilteredProducts([]);
          setIsLoading(false);
          return;
        }
      }

      console.log(`🔍 Filtering locally for current season: "${currentSeason}"`);
      
      // Filter locally from cached products
      const filtered = allProductsCache.filter(product => {
        const matches = product.season === currentSeason;
        console.log(`🎯 "${product.name}": season="${product.season}", matches="${currentSeason}"? ${matches}`);
        return matches;
      });

      console.log(`✅ Local current season filter results: ${filtered.length} products for "${currentSeason}"`);
      setFilteredProducts(filtered);
    } catch (error) {
      console.error('Local current season filtering error:', error);
      setFilteredProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLastEpisodeClick = async () => {
    console.log(`🔴 LETZTE FOLGE BUTTON CLICKED!`);
    console.log(`📺 Last Episode clicked - finding LATEST episode dynamically`);
    
    setSearchMethod("text");
    setShowSplitScreen(true);
    setShowProductSearch(false);
    setIsLoading(true);

    try {
      // Ensure all products are loaded first
      let productsToAnalyze = allProductsCache;
      if (!productsToAnalyze) {
        console.log('🔵 No products cached, loading all products first...');
        productsToAnalyze = await loadAllProducts();
        
        if (!productsToAnalyze) {
          console.log('❌ Failed to load products for last episode filtering');
          setFilteredProducts([]);
          setIsLoading(false);
          return;
        }
      }

      // Find the latest episode dynamically
      let latestSeason = 0;
      let latestEpisode = 0;
      let latestSeasonName = "";
      
      productsToAnalyze.forEach(product => {
        // Extract season number
        if (product.season) {
          const seasonMatch = product.season.match(/Staffel (\d+)/i);
          if (seasonMatch) {
            const seasonNum = parseInt(seasonMatch[1]);
            
            // Extract episode number if available
            const episodeInfo = (product as any).episode;
            let episodeNum = 1; // Default episode
            
            if (episodeInfo) {
              const episodeMatch = episodeInfo.toString().match(/(\d+)/);
              if (episodeMatch) {
                episodeNum = parseInt(episodeMatch[1]);
              }
            }
            
            // Check if this is later than our current latest
            if (seasonNum > latestSeason || (seasonNum === latestSeason && episodeNum > latestEpisode)) {
              latestSeason = seasonNum;
              latestEpisode = episodeNum;
              latestSeasonName = product.season;
            }
          }
        }
      });

      const latestEpisodeText = `Staffel ${latestSeason}, Folge ${latestEpisode}`;
      console.log(`🔍 Found latest episode: ${latestEpisodeText}`);
      
      setCurrentSearchTerm(`Letzte Folge (${latestEpisodeText})`);
      
      // Filter for products from the latest season (since episode data might be incomplete)
      const filtered = productsToAnalyze.filter(product => {
        const matches = product.season === latestSeasonName;
        console.log(`📺 "${product.name}": season="${product.season}", matches latest="${latestSeasonName}"? ${matches}`);
        return matches;
      });

      console.log(`✅ Local latest episode filter results: ${filtered.length} products from "${latestEpisodeText}"`);
      setFilteredProducts(filtered);
    } catch (error) {
      console.error('Local latest episode filtering error:', error);
      setFilteredProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePopularProductsClick = async () => {
    console.log(`⭐ Popular Products clicked - using LOCAL filtering`);
    
    setCurrentSearchTerm("Beliebte Produkte");
    setSearchMethod("text");
    setShowSplitScreen(true);
    setShowProductSearch(true);
    setIsLoading(true);

    try {
      // Ensure all products are loaded first
      if (!allProductsCache) {
        console.log('🔵 No products cached, loading all products first...');
        await loadAllProducts();
        if (!allProductsCache) {
          console.log('❌ Failed to load products for popular filtering');
          setFilteredProducts([]);
          setIsLoading(false);
          return;
        }
      }

      console.log(`🔍 Filtering locally for popular products`);
      
      // Sort by rating and reviews to find popular products
      const filtered = [...allProductsCache]
        .sort((a, b) => {
          // Sort by rating first, then by reviews
          if (b.rating !== a.rating) return b.rating - a.rating;
          return b.reviews - a.reviews;
        })
        .slice(0, 6); // Show only 6 most popular

      console.log(`✅ Local popular products filter results: ${filtered.length} popular products`);
      filtered.forEach(product => {
        console.log(`   ⭐ "${product.name}" (rating: ${product.rating}, reviews: ${product.reviews})`);
      });
      
      setFilteredProducts(filtered);
    } catch (error) {
      console.error('Local popular products filtering error:', error);
      setFilteredProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAllProductsClick = async () => {
    console.log('🟡 handleAllProductsClick - cache exists:', !!allProductsCache, 'cache length:', allProductsCache?.length);
    
    setCurrentSearchTerm("Alle Produkte");
    setSearchMethod("text");
    setShowSplitScreen(true);
    setShowProductSearch(false);
    
    // Load all products if not already loaded
    if (!allProductsCache && !allProductsLoaded) {
      console.log('🔵 Cache not available, loading all products...');
      await loadAllProducts();
      // After loading, the cache is set but we need to wait for the next render
      // So we'll exit here and let the useEffect below handle setting filteredProducts
      return;
    }

    // Show all cached products if available
    if (allProductsCache) {
      console.log('🟢 Setting filtered products from cache, count:', allProductsCache.length);
      setFilteredProducts(allProductsCache);
    } else {
      // Fallback to API search
      setIsLoading(true);
      try {
        const apiResponse = await apiService.searchByText("Höhle der Löwen Produkte alle");
        
        if (apiResponse && apiResponse.results && apiResponse.results.length > 0) {
          const mappedProducts = ProductMapper.mapApiProductsToDummy(apiResponse.results);
          setFilteredProducts(mappedProducts);
        } else {
          setFilteredProducts([]);
        }
      } catch (error) {
        console.error('All products search error:', error);
        setFilteredProducts([]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleInvestorDealsClick = async () => {
    console.log(`💼 Investor Deals clicked - using LOCAL filtering`);
    
    setCurrentSearchTerm("Investoren-Deals");
    setSearchMethod("text");
    setShowSplitScreen(true);
    setShowProductSearch(false);
    setIsLoading(true);

    try {
      // Ensure all products are loaded first
      if (!allProductsCache) {
        console.log('🔵 No products cached, loading all products first...');
        await loadAllProducts();
        if (!allProductsCache) {
          console.log('❌ Failed to load products for investor deals filtering');
          setFilteredProducts([]);
          setIsLoading(false);
          return;
        }
      }

      console.log(`🔍 Filtering locally for investor deals (all products with known investors)`);
      
      // Filter for products that have an investor assigned
      const filtered = allProductsCache.filter(product => {
        const hasInvestor = product.investor && product.investor !== "" && product.investor !== "Unbekannt";
        console.log(`💼 "${product.name}": investor="${product.investor}", hasInvestor? ${hasInvestor}`);
        return hasInvestor;
      });

      console.log(`✅ Local investor deals filter results: ${filtered.length} products with investor deals`);
      filtered.forEach(product => {
        console.log(`   💼 "${product.name}" → Investor: ${product.investor}`);
      });
      
      setFilteredProducts(filtered);
    } catch (error) {
      console.error('Local investor deals filtering error:', error);
      setFilteredProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenProductSearch = () => {
    // Reset product search to trigger animation
    setShowProductSearch(false);
    setShowSplitScreen(true);
    setCurrentSearchTerm("");
    setSplitScreenSearchQuery("");
    setIsLoading(true);
    
    // Small delay to let React process the state change
    setTimeout(() => {
      setShowProductSearch(true);
    }, 50);

    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  // State for available staffeln from API
  const [availableStaffeln, setAvailableStaffeln] = useState<string[]>([]);
  const [availableInvestoren, setAvailableInvestoren] = useState<string[]>([]);
  const [availableKategorien, setAvailableKategorien] = useState<string[]>([]);
  const [availableMarken, setAvailableMarken] = useState<string[]>([]);

  // Test category assignment function
  const testCategoryAssignment = (product: any): string => {
    const name = product.name?.toLowerCase() || '';
    const description = product.description?.toLowerCase() || '';
    const context = product.context?.toLowerCase() || '';
    const combined = `${name} ${description} ${context}`;
    
    // Brand-based category assignment (highest priority)
    if (name.includes('zoltra sports') || name.includes('zoltra')) {
      // All Zoltra products are sport & fitness related
      return 'Sport & Fitness';
    }
    if (name.includes('anuux')) {
      // All ANUUX products are health supplements
      return 'Gesundheit & Nahrungsergänzung';
    }
    if (name.includes('dogs-guard')) {
      // All Dogs-Guard products are for pets
      return 'Haustiere';
    }
    if (name.includes('aerostiletto')) {
      // All Aerostiletto products are fashion accessories
      return 'Mode & Accessoires';
    }
    
    // FYTA brand needs sub-categorization based on product type
    if (name.includes('fyta')) {
      // FYTA plant sensors go to Home & Garden
      if (combined.includes('soil moisture') || combined.includes('plant care') || 
          combined.includes('beam gen 2') || combined.includes('grow lights') ||
          combined.includes('plant growth') || combined.includes('photosynthesis')) {
        return 'Heim & Garten';
      }
      // FYTA lighting products go to Smart Home
      if (combined.includes('smart lighting') || combined.includes('led bulbs') || 
          combined.includes('wireless control') || combined.includes('home automation') ||
          combined.includes('mood lighting') || combined.includes('dimmable')) {
        return 'Smart Home & Technologie';
      }
      // Default FYTA to Smart Home if unclear
      return 'Smart Home & Technologie';
    }
    
    // Specific product overrides for edge cases
    if (name.includes('bee cream')) {
      return 'Beauty & Pflege';
    }
    
    // Health & Supplements
    if (combined.includes('kapseln') || combined.includes('supplement') || 
        combined.includes('nahrungsergänzung') || combined.includes('vitamin') ||
        combined.includes('gesundheit') || combined.includes('dietary') ||
        combined.includes('immune support') || combined.includes('energy boost')) {
      return 'Gesundheit & Nahrungsergänzung';
    }
    
    // Pets (before Smart Home to avoid conflicts)
    if (combined.includes('hund') || combined.includes('haustier') || 
        combined.includes('geschirr') || combined.includes('dogs-guard') ||
        combined.includes('tier') || combined.includes('dog harness') ||
        combined.includes('pet')) {
      return 'Haustiere';
    }
    
    // Smart Home & Technology (FYTA plant sensors)
    if ((combined.includes('sensor') && combined.includes('plant')) || 
        combined.includes('soil moisture') || combined.includes('plant care') ||
        (name.includes('fyta') && combined.includes('beam gen'))) {
      return 'Heim & Garten';
    }
    
    // Smart Home & Technology (lighting and hubs)
    if (combined.includes('smart lighting') || combined.includes('led bulbs') || 
        combined.includes('wlan hub') || combined.includes('wi-fi hub') ||
        combined.includes('wireless control') || combined.includes('home automation') ||
        (combined.includes('beam') && combined.includes('lighting'))) {
      return 'Smart Home & Technologie';
    }
    
    // Services & Subscriptions (before Sports to catch bundles)
    if (combined.includes('subscription') || combined.includes('streaming services') || 
        combined.includes('digital content') || combined.includes('entertainment access') ||
        combined.includes('wellness package') || combined.includes('self-care items')) {
      return 'Services & Abonnements';
    }
    
    // Sports & Fitness
    if (combined.includes('fascia trainer') || combined.includes('muscle recovery') || 
        combined.includes('fitness accessory') || combined.includes('football sock') ||
        combined.includes('moisture-wicking') || combined.includes('training gear') ||
        combined.includes('water bottle') || combined.includes('insulated') ||
        (name.includes('zoltra') && !combined.includes('bundle'))) {
      return 'Sport & Fitness';
    }
    
    // Fashion & Accessories
    if (combined.includes('stiletto heels') || combined.includes('high heel shoes') || 
        combined.includes('shoe accessory') || combined.includes('foot care') ||
        combined.includes('gel inserts') || combined.includes('arch support') ||
        combined.includes('schuhe') || combined.includes('schuh') || 
        combined.includes('mode') || combined.includes('kleidung') || combined.includes('socke')) {
      return 'Mode & Accessoires';
    }
    
    // Home & Garden
    if (combined.includes('pflanzen') || combined.includes('garten') || 
        combined.includes('pflanzenpflege') || combined.includes('grove') ||
        combined.includes('plant care') || combined.includes('soil moisture')) {
      return 'Heim & Garten';
    }
    
    // Household & Cleaning
    if (combined.includes('cleaning tools') || combined.includes('microfiber cloths') || 
        combined.includes('scrub brushes') || combined.includes('cleaning supplies')) {
      return 'Haushalt & Reinigung';
    }
    
    // Beauty & Care
    if (combined.includes('beauty') || combined.includes('pflege') || 
        combined.includes('cream') || combined.includes('kosmetik') ||
        combined.includes('schönheit')) {
      return 'Beauty & Pflege';
    }
    
    return 'Sonstiges';
  };

  // Helper function to get available options from current filtered products
  const getAvailableOptionsFromProducts = () => {
    const seasons = new Set<string>();
    const categories = new Set<string>();
    const episodes = new Set<string>();

    filteredProducts.forEach(product => {
      if (product.season) seasons.add(product.season);
      // Use the category assigned by ProductMapper
      if (product.category) categories.add(product.category);
      
      // Try to extract episode information from product data
      const episodeInfo = (product as any).episode || (product as any).folge;
      if (episodeInfo) {
        episodes.add(typeof episodeInfo === 'string' ? episodeInfo : `Folge ${episodeInfo}`);
      }
    });

    // Use the same investor list as the top menu (alphabetically sorted)
    const allInvestors = [
      "Carsten Maschmeyer",
      "Christian Miele",
      "Dagmar Wöhrl",
      "Frank Thelen",
      "Janna Ensthaler",
      "Judith Williams",
      "Lena Gercke",
      "Ralf Dümmel"
    ];

    // If no products loaded yet, provide default categories
    const defaultCategories = categories.size === 0 ? [
      'Sport & Fitness',
      'Gesundheit & Nahrungsergänzung', 
      'Haustiere',
      'Mode & Accessoires',
      'Smart Home & Technologie',
      'Heim & Garten',
      'Sonstiges'
    ] : Array.from(categories).sort();

    return {
      seasons: Array.from(seasons).sort(),
      investors: allInvestors,
      categories: defaultCategories,
      episodes: Array.from(episodes).sort()
    };
  };

  // Get current available options
  const currentAvailableOptions = getAvailableOptionsFromProducts();

  // Extract brand name from product title (handles prefixed brand names)
  const extractBrandFromProductName = (productName: string): string | null => {
    const productLower = productName.toLowerCase().trim();
    
    // First check for brand prefix format "Brand – Product" and normalize the brand name
    if (productName.includes(' – ')) {
      const brandPart = productName.split(' – ')[0].trim().toLowerCase();
      
      // Normalize brand names to consistent format
      if (brandPart.includes('fyta')) return 'FYTA';
      if (brandPart.includes('aerostiletto')) return 'Aerostiletto';
      if (brandPart.includes('dogs-guard') || brandPart.includes('dogs guard')) return 'Dogs-Guard';
      if (brandPart.includes('anuux')) return 'ANUUX';
      if (brandPart.includes('zoltra')) return 'Zoltra Sports';
      
      // Return the original brand part if no normalization needed
      return productName.split(' – ')[0].trim();
    }
    
    // For products without prefix, check content and normalize
    // FYTA products (any case variations)
    if (productLower.includes('fyta') || 
        productLower.includes('beam gen') || 
        productLower.includes('grove set') || 
        productLower.includes('wlan hub')) {
      return 'FYTA';
    }
    
    // Aerostiletto products  
    if (productLower.includes('aerostiletto')) {
      return 'Aerostiletto';  
    }
    
    // Dogs-Guard products
    if (productLower.includes('dogs-guard') || productLower.includes('dogs guard') || productLower.includes('hundegeschirr')) {
      return 'Dogs-Guard';
    }
    
    // ANUUX products
    if (productLower.includes('anuux') || productLower.includes('kapseln')) {
      return 'ANUUX';
    }
    
    // Zoltra Sports products
    if (productLower.includes('zoltra') || productLower.includes('grip') || productLower.includes('fußball socke') || productLower.includes('pickup faszientrainer') || productLower.includes('partner-bundle') || productLower.includes('sorglos-bundle') || productLower.includes('cleaning kit') || productLower.includes('grip walk')) {
      return 'Zoltra Sports';
    }
    
    // Other brands
    if (productLower.includes('nailmatic')) {
      return 'Nailmatic';
    }
    
    return null;
  };

  // Temporary: Analyze product payloads for category assignment
  const analyzeProductsForCategories = (products: any[]) => {
    console.log('📊 PRODUCT PAYLOAD ANALYSIS FOR CATEGORIES (Testing):');
    console.log('='.repeat(60));
    
    products.forEach((product, index) => {
      console.log(`\n🔸 Product ${index + 1}: "${product.name}"`);
      console.log(`📝 Description: "${product.description?.substring(0, 100)}..."`);
      console.log(`🏷️ Available fields:`, Object.keys(product));
      console.log(`📦 Full payload:`, product);
      console.log('-'.repeat(40));
    });
    
    // Test automatic category assignment
    console.log('\n🤖 TESTING CATEGORY ASSIGNMENT:');
    products.forEach((product) => {
      const category = testCategoryAssignment(product);
      console.log(`"${product.name}" → Category: "${category}"`);
    });
  };

  // Load all products once when leaving home screen
  const loadAllProducts = async (): Promise<any[] | null> => {
    console.log('🔵 loadAllProducts called - allProductsLoaded:', allProductsLoaded, 'allProductsCache:', !!allProductsCache);
    if (allProductsLoaded || allProductsCache) return allProductsCache; // Already loaded
    
    console.log('🟢 Starting multi-query product loading...');
    setIsLoading(true);
    try {
      // Strategic multi-query approach to maximize product coverage
      // 6 targeted queries to capture different product segments
      const searchQueries = [
        "Höhle der Löwen",                                    // Core DHDL products
        "Zoltra Aerostiletto Dogs-Guard ANUUX FYTA",        // Brand-focused 1
        "Nailmatic Staffel 17 Staffel 16",                  // Brand-focused 2 + recent episodes  
        "Innovation Startup Produkt Deutschland Erfindung",  // Category-focused
        "Investor Deal Carsten Maschmeyer Judith Williams",  // Investor-focused
        "Ralf Dümmel Dagmar Wöhrl Nils Glagau Investment"   // Additional investors
      ];
      
      const allProducts = new Map<string, any>(); // Use Map to deduplicate by product name
      
      // Execute searches in parallel for better performance
      // Try requesting 25 results per query to bypass the 15-result limitation
      const searchPromises = searchQueries.map(query => 
        apiService.searchByText(query, 0, 25).catch(error => {
          console.warn(`Search failed for "${query}":`, error);
          return null;
        })
      );
      
      const apiResponses = await Promise.all(searchPromises);
      
      // Collect all unique products from all searches
      apiResponses.forEach((apiResponse, index) => {
        if (apiResponse && apiResponse.results && apiResponse.results.length > 0) {
          console.log(`Query "${searchQueries[index]}" returned ${apiResponse.results.length} results`);
          
          apiResponse.results.forEach(result => {
            const productName = result.payload.name;
            if (!allProducts.has(productName)) {
              allProducts.set(productName, result);
            }
          });
        }
      });
      
      console.log(`Total unique products found: ${allProducts.size}`);
      
      if (allProducts.size > 0) {
        const mappedProducts = ProductMapper.mapApiProductsToDummy(Array.from(allProducts.values()));
        
        // Filter out products from Season 15 and older
        const filteredProducts = mappedProducts.filter(product => {
          if (product.season) {
            const seasonMatch = product.season.match(/Staffel (\d+)/i);
            if (seasonMatch) {
              const seasonNumber = parseInt(seasonMatch[1]);
              const isRecentSeason = seasonNumber >= 16;
              if (!isRecentSeason) {
                console.log(`🚫 Filtering out old season: "${product.name}" from ${product.season}`);
              }
              return isRecentSeason;
            }
          }
          // Keep products without season data
          return true;
        });
        
        console.log('🔴 Setting cache with products:', filteredProducts.length, 'products (filtered from', mappedProducts.length, 'total)');
        console.log('📅 Excluded products from Season 15 and older:', mappedProducts.length - filteredProducts.length);
        setAllProductsCache(filteredProducts);
        setAllProductsLoaded(true);
        
        // Analyze products for category assignment testing (using filtered products)
        analyzeProductsForCategories(filteredProducts);
        
        // Extract metadata from loaded products
        const staffelnSet = new Set<string>();
        const investorenSet = new Set<string>();
        const kategorienSet = new Set<string>();
        const markenSet = new Set<string>();
        
        filteredProducts.forEach(product => {
          if (product.season) staffelnSet.add(product.season);
          if (product.investor) investorenSet.add(product.investor);
          if (product.category) kategorienSet.add(product.category);
          
          // Extract actual brand name from product name
          if (product.name) {
            const brandName = extractBrandFromProductName(product.name);
            if (brandName) {
              markenSet.add(brandName);
            }
          }
        });
        
        // Update available options based on actual products
        // Sort Staffeln in descending order (highest first)
        setAvailableStaffeln(Array.from(staffelnSet).sort((a, b) => {
          const numA = parseInt(a.match(/\d+/)?.[0] || '0');
          const numB = parseInt(b.match(/\d+/)?.[0] || '0');
          return numB - numA; // Descending order
        }));
        setAvailableInvestoren(Array.from(investorenSet).sort());
        setAvailableKategorien(Array.from(kategorienSet).sort()); // Alphabetical order
        setAvailableMarken(Array.from(markenSet).sort()); // Alphabetical order
        
        console.log(`Loaded metadata: ${staffelnSet.size} seasons, ${investorenSet.size} investors, ${kategorienSet.size} categories, ${markenSet.size} brands`);
        
        setIsLoading(false);
        return filteredProducts; // Return the loaded products
      }
    } catch (error) {
      console.error('Error loading all products:', error);
      setIsLoading(false);
      return null;
    }
  };

  // Fetch available staffeln from API

  // Fetch available investors from API
  const fetchAvailableInvestoren = async () => {
    try {
      // For initial metadata, just use hardcoded investors since API doesn't provide this data
      // The real investor data will come from loadAllProducts when products are mapped
      setAvailableInvestoren(["Judith Williams", "Carsten Maschmeyer", "Janna Ensthaler", "Nils Glagau", "Dagmar Wöhrl", "Ralf Dümmel"]);
    } catch (error) {
      console.error('Error fetching available investors:', error);
      setAvailableInvestoren(["Judith Williams", "Carsten Maschmeyer", "Nils Glagau"]);
    }
  };



  // Load available data on component mount
  useEffect(() => {
    console.log('🔷 Initial mount - fetching metadata...');
    fetchAvailableInvestoren();
    console.log('🔶 Available categories on mount:', availableKategorien);
  }, []);

  // Update filtered products when cache is loaded and we're showing "Alle Produkte"
  useEffect(() => {
    if (allProductsCache && currentSearchTerm === "Alle Produkte") {
      console.log('📌 Cache updated, showing all products:', allProductsCache.length);
      setFilteredProducts(allProductsCache);
    }
  }, [allProductsCache, currentSearchTerm]);

  // Helper functions to get unique values from products
  const getAvailableStaffeln = () => {
    return availableStaffeln;
  };

  const getAvailableInvestoren = () => {
    // Return all investors in alphabetical order
    return [
      "Carsten Maschmeyer",
      "Christian Miele",
      "Dagmar Wöhrl",
      "Frank Thelen",
      "Janna Ensthaler",
      "Judith Williams",
      "Lena Gercke",
      "Ralf Dümmel"
    ];
  };

  const getAvailableKategorien = () => {
    return availableKategorien;
  };

  const getAvailableMarken = () => {
    return availableMarken;
  };

  const toggleDropdown = (dropdown: keyof typeof dropdowns) => {
    setDropdowns((prev) => ({
      staffeln: false,
      investoren: false,
      kategorien: false,
      marken: false,
      [dropdown]: !prev[dropdown],
    }));
  };

  const handleStaffelClick = async (staffel: string) => {
    console.log(`🎬 Season clicked: "${staffel}" - using LOCAL filtering`);
    
    setCurrentSearchTerm(staffel);
    setSearchMethod("text");
    setShowSplitScreen(true);
    setShowProductSearch(false);
    setDropdowns((prev) => ({ ...prev, staffeln: false }));
    setIsLoading(true);

    try {
      // Ensure all products are loaded first
      if (!allProductsCache) {
        console.log('🔵 No products cached, loading all products first...');
        await loadAllProducts();
        if (!allProductsCache) {
          console.log('❌ Failed to load products for season filtering');
          setFilteredProducts([]);
          setIsLoading(false);
          return;
        }
      }

      console.log(`🔍 Filtering locally for season: "${staffel}"`);
      
      // Filter locally from cached products
      const filtered = allProductsCache.filter(product => {
        const matches = product.season === staffel;
        console.log(`🎬 "${product.name}": season="${product.season}", matches="${staffel}"? ${matches}`);
        return matches;
      });

      console.log(`✅ Local season filter results: ${filtered.length} products for "${staffel}"`);
      setFilteredProducts(filtered);
    } catch (error) {
      console.error('Local season filtering error:', error);
      setFilteredProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInvestorClick = async (investor: string) => {
    console.log(`💰 Investor clicked: "${investor}" - using LOCAL filtering`);
    
    setCurrentSearchTerm(`Investor: ${investor}`);
    setSearchMethod("text");
    setShowSplitScreen(true);
    setShowProductSearch(false);
    setDropdowns((prev) => ({ ...prev, investoren: false }));
    setIsLoading(true);

    try {
      // Ensure all products are loaded first
      let productsToFilter = allProductsCache;
      if (!productsToFilter) {
        console.log('🔵 No products cached, loading all products first...');
        productsToFilter = await loadAllProducts();
        if (!productsToFilter) {
          console.log('❌ Failed to load products for investor filtering');
          setFilteredProducts([]);
          setIsLoading(false);
          return;
        }
      }

      console.log(`🔍 Filtering locally for investor: "${investor}"`);
      
      // Filter locally from cached products - handle multiple investors
      const filtered = productsToFilter.filter(product => {
        // Handle various investor field formats
        const productInvestors = product.investor || '';
        
        // Check if investor string contains the selected investor
        // This handles cases like "Ralf Dümmel, Judith Williams" or "Carsten Maschmeyer & Dagmar Wöhrl"
        const matches = productInvestors.includes(investor);
        
        console.log(`💰 "${product.name}": investor="${productInvestors}", contains "${investor}"? ${matches}`);
        return matches;
      });

      console.log(`✅ Local investor filter results: ${filtered.length} products for "${investor}"`);
      setFilteredProducts(filtered);
    } catch (error) {
      console.error('Local investor filtering error:', error);
      setFilteredProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKategorieClick = async (kategorie: string) => {
    console.log(`🏷️ Category clicked: "${kategorie}" - using LOCAL filtering`);
    
    setCurrentSearchTerm(`Kategorie: ${kategorie}`);
    setSearchMethod("text");
    setShowSplitScreen(true);
    setShowProductSearch(false);
    setDropdowns((prev) => ({ ...prev, kategorien: false }));
    setIsLoading(true);

    try {
      // Ensure all products are loaded first
      if (!allProductsCache) {
        console.log('🔵 No products cached, loading all products first...');
        await loadAllProducts();
        if (!allProductsCache) {
          console.log('❌ Failed to load products for category filtering');
          setFilteredProducts([]);
          setIsLoading(false);
          return;
        }
      }

      console.log(`🔍 Filtering locally for category: "${kategorie}"`);
      console.log(`🔍 Total cached products: ${allProductsCache.length}`);
      
      // Filter locally from cached products
      const filtered = allProductsCache.filter(product => {
        const matches = product.category === kategorie;
        console.log(`🏷️ "${product.name}": category="${product.category}", matches="${kategorie}"? ${matches}`);
        return matches;
      });

      console.log(`✅ Local category filter results: ${filtered.length} products for "${kategorie}"`);
      filtered.forEach(product => {
        console.log(`   - "${product.name}" (${product.category})`);
      });
      
      setFilteredProducts(filtered);
    } catch (error) {
      console.error('Local category filtering error:', error);
      setFilteredProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMarkenClick = async (marke: string) => {
    console.log(`🏷️ Brand clicked: "${marke}" - using LOCAL filtering`);
    
    setCurrentSearchTerm(`Marke: ${marke}`);
    setSearchMethod("text");
    setShowSplitScreen(true);
    setShowProductSearch(false);
    setDropdowns((prev) => ({ ...prev, marken: false }));
    setIsLoading(true);

    try {
      // Ensure all products are loaded first
      if (!allProductsCache) {
        console.log('🔵 No products cached, loading all products first...');
        await loadAllProducts();
        if (!allProductsCache) {
          console.log('❌ Failed to load products for brand filtering');
          setFilteredProducts([]);
          setIsLoading(false);
          return;
        }
      }

      console.log(`🔍 Filtering locally for brand: "${marke}"`);
      
      // Filter locally from cached products using proper brand extraction
      const filtered = allProductsCache.filter(product => {
        const productBrand = extractBrandFromProductName(product.name);
        const matches = productBrand === marke;
        console.log(`🏷️ "${product.name}": extracted brand="${productBrand}", matches="${marke}"? ${matches}`);
        return matches;
      });

      console.log(`✅ Local brand filter results: ${filtered.length} products for "${marke}"`);
      setFilteredProducts(filtered);
    } catch (error) {
      console.error('Local brand filtering error:', error);
      setFilteredProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const applyFilters = async () => {
    console.log('🔧 applyFilters() called with:', {
      hasCache: !!allProductsCache,
      cacheLength: allProductsCache?.length || 0,
      activeFilters
    });
    
    setIsLoading(true);
    
    try {
      // Ensure all products are loaded first
      if (!allProductsCache) {
        console.log('🔵 No products cached, loading all products first...');
        await loadAllProducts();
        // loadAllProducts will set allProductsCache, but we need to wait for the next render
        if (!allProductsCache) {
          console.log('❌ Failed to load products for filtering');
          setFilteredProducts([]);
          return;
        }
      }

      console.log('🔍 Applying local filters to', allProductsCache.length, 'cached products');
      console.log('🔍 Active filters:', activeFilters);
      
      // Filter locally from cached products
      let filtered = allProductsCache.filter(product => {
        // Season filter
        if (activeFilters.seasons.length > 0) {
          if (!product.season || !activeFilters.seasons.includes(product.season)) {
            return false;
          }
        }
        
        // Episode filter
        if (activeFilters.episodes.length > 0) {
          const episode = 'episode' in product ? (product as any).episode : undefined;
          if (!episode || !activeFilters.episodes.includes(episode)) {
            return false;
          }
        }
        
        // Investor filter - handle multiple investors
        if (activeFilters.investors.length > 0) {
          const productInvestors = product.investor || '';
          // Check if any of the selected investors are in the product's investor string
          const hasMatchingInvestor = activeFilters.investors.some(investor => 
            productInvestors.includes(investor)
          );
          if (!hasMatchingInvestor) {
            return false;
          }
        }
        
        // Category filter
        if (activeFilters.categories.length > 0) {
          console.log(`🏷️ Checking product "${product.name}": category="${product.category}", required=${activeFilters.categories}`);
          if (!product.category || !activeFilters.categories.includes(product.category)) {
            console.log(`❌ Product filtered out: "${product.name}" (category: "${product.category}")`);
            return false;
          }
          console.log(`✅ Product matches category: "${product.name}"`);
        }
        
        // Brand filter (check both prefixed name and brand extraction)
        if (activeFilters.brands.length > 0) {
          const productBrand = extractBrandFromProductName(product.name);
          const matchesBrand = activeFilters.brands.some(brand => {
            return product.name.toLowerCase().includes(brand.toLowerCase()) ||
                   (productBrand && productBrand.toLowerCase().includes(brand.toLowerCase()));
          });
          if (!matchesBrand) {
            return false;
          }
        }
        
        return true;
      });

      // Apply price filter
      if (activeFilters.priceRange !== "all") {
        filtered = filtered.filter((product) => {
          const price = parseFloat(product.price.replace(",", "."));
          switch (activeFilters.priceRange) {
            case "under-20":
              return price < 20;
            case "20-50":
              return price >= 20 && price <= 50;
            case "over-50":
              return price > 50;
            case "under-50":
              return price < 50;
            default:
              return true;
          }
        });
      }
      
      // Apply popularity filter
      if (activeFilters.popular) {
        filtered = filtered
          .sort((a, b) => {
            const aScore = a.rating * Math.log(a.reviews + 1);
            const bScore = b.rating * Math.log(b.reviews + 1);
            return bScore - aScore;
          })
          .slice(0, Math.min(6, filtered.length));
      }

      console.log('✅ Local filtering complete:', filtered.length, 'products match filters');
      setFilteredProducts(filtered);
      
    } catch (error) {
      console.error('Local filter error:', error);
      setFilteredProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFilter = (
    filterType: keyof typeof activeFilters,
    value: string | boolean,
  ) => {
    if (filterType === "priceRange") {
      setActiveFilters((prev) => ({
        ...prev,
        [filterType]:
          prev[filterType] === value ? "all" : value as string,
      }));
    } else if (filterType === "popular") {
      setActiveFilters((prev) => ({
        ...prev,
        [filterType]: value as boolean,
      }));
    } else {
      setActiveFilters((prev) => {
        const currentValues = prev[filterType] as string[];
        const newValues = currentValues.includes(value as string)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value as string];

        // Clear episodes when seasons change
        if (filterType === "seasons") {
          return {
            ...prev,
            [filterType]: newValues,
            episodes: [],
          };
        }
        
        return {
          ...prev,
          [filterType]: newValues,
        };
      });
    }
  };

  // Trigger local filtering whenever activeFilters changes
  useEffect(() => {
    const hasActiveFilters = 
      activeFilters.seasons.length > 0 ||
      activeFilters.episodes.length > 0 ||
      activeFilters.investors.length > 0 ||
      activeFilters.categories.length > 0 ||
      activeFilters.brands.length > 0 ||
      activeFilters.priceRange !== "all" ||
      activeFilters.popular;

    console.log('🔄 Filter useEffect triggered:', {
      hasActiveFilters,
      hasCachedProducts: !!allProductsCache,
      cacheLength: allProductsCache?.length || 0,
      activeFilters
    });

    if (hasActiveFilters) {
      if (allProductsCache && allProductsCache.length > 0) {
        console.log('✅ Cache ready, applying local filters immediately...');
        applyFilters();
      } else {
        console.log('⏳ Cache not ready, loading all products first...');
        loadAllProducts().then(() => {
          console.log('✅ Products loaded, now applying filters...');
          // applyFilters will be called by the next useEffect trigger when allProductsCache updates
        });
      }
    } else if (!hasActiveFilters && allProductsCache) {
      console.log('🔄 No active filters, showing all cached products');
      setFilteredProducts(allProductsCache);
      setIsLoading(false);
    }
  }, [activeFilters, allProductsCache]);

  const handleImageSearch = async () => {
    if (selectedImage) {
      setSearchMethod("image");
      setCurrentSearchTerm(selectedImage.name);
      setShowSplitScreen(true);
      setShowProductSearch(true);
      setIsLoading(true);
      
      // Open chat window on mobile when searching from image button
      if (isMobile) {
        setIsChatOpen(true);
      }

      try {
        const imageBase64 = await apiService.convertFileToBase64(selectedImage);
        const apiResponse = await apiService.searchByImage(imageBase64);
        
        if (apiResponse && apiResponse.results) {
          const mappedProducts = ProductMapper.mapApiProductsToDummy(apiResponse.results);
          setFilteredProducts(mappedProducts);
          setOriginalSearchResults(mappedProducts);
        } else {
          setFilteredProducts([]);
          setOriginalSearchResults([]);
        }
      } catch (error) {
        console.error('Image search error:', error);
        setFilteredProducts([]);
      } finally {
        setIsLoading(false);
      }
    } else {
      // Trigger file upload if no image selected
      document.getElementById("image-upload")?.click();
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      setSearchMethod("image");
      setCurrentSearchTerm(file.name);
      setFilteredProducts([]);
      setShowSplitScreen(true);
      setShowProductSearch(true);
      setIsLoading(true);
      
      // Open chat window on mobile when uploading image
      if (isMobile) {
        setIsChatOpen(true);
      }
      
      // Automatically trigger search for the uploaded image
      const searchTerm = file.name;
      
      // Add to search history
      const timestamp = Date.now();
      const imageUrl = URL.createObjectURL(file);
      
      
      setSearchHistory(prev => [...prev, {
        term: searchTerm,
        timestamp,
        method: "image",
        imageUrl
      }]);
      
      // Add loading response to history
      setResponseHistory(prev => [...prev, {
        searchTerm: searchTerm,
        resultCount: 0,
        timestamp,
        isLoading: true
      }]);

      try {
        const imageBase64 = await apiService.convertFileToBase64(file);
        const apiResponse = await apiService.searchByImage(imageBase64, 0.2);
        
        if (apiResponse && apiResponse.results) {
          const mappedProducts = ProductMapper.mapApiProductsToDummy(apiResponse.results);
          setFilteredProducts(mappedProducts);
          setOriginalSearchResults(mappedProducts);
          
          // Update response history with result count
          setResponseHistory(prev => 
            prev.map((response, index) => 
              index === prev.length - 1 
                ? { ...response, resultCount: mappedProducts.length, isLoading: false }
                : response
            )
          );
        } else {
          setFilteredProducts([]);
          setOriginalSearchResults([]);
          
          // Update response history with 0 results
          setResponseHistory(prev => 
            prev.map((response, index) => 
              index === prev.length - 1 
                ? { ...response, resultCount: 0, isLoading: false }
                : response
            )
          );
        }
      } catch (error) {
        console.error('Image search error:', error);
        setFilteredProducts([]);
        setOriginalSearchResults([]);
        
        // Update response history with error
        setResponseHistory(prev => 
          prev.map((response, index) => 
            index === prev.length - 1 
              ? { ...response, resultCount: 0, isLoading: false }
              : response
          )
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Drag and drop handlers
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      const file = files[0];
      setSelectedImage(file);
      setSearchMethod("image");
      setCurrentSearchTerm(file.name);
      setFilteredProducts([]);
      setShowSplitScreen(true);
      setShowProductSearch(true);
      setIsLoading(true);
      
      // Automatically trigger search for the dropped image
      const searchTerm = file.name;
      
      // Add to search history
      const timestamp = Date.now();
      const imageUrl = URL.createObjectURL(file);
      
      setSearchHistory(prev => [...prev, {
        term: searchTerm,
        timestamp,
        method: "image",
        imageUrl
      }]);
      
      // Add loading response to history
      setResponseHistory(prev => [...prev, {
        searchTerm: searchTerm,
        resultCount: 0,
        timestamp,
        isLoading: true
      }]);

      try {
        const imageBase64 = await apiService.convertFileToBase64(file);
        const apiResponse = await apiService.searchByImage(imageBase64, 0.2);
        
        if (apiResponse && apiResponse.results) {
          const mappedProducts = ProductMapper.mapApiProductsToDummy(apiResponse.results);
          setFilteredProducts(mappedProducts);
          setOriginalSearchResults(mappedProducts);
          
          // Update response history with result count
          setResponseHistory(prev => 
            prev.map((response, index) => 
              index === prev.length - 1 
                ? { ...response, resultCount: mappedProducts.length, isLoading: false }
                : response
            )
          );
        } else {
          setFilteredProducts([]);
          setOriginalSearchResults([]);
          
          // Update response history with 0 results
          setResponseHistory(prev => 
            prev.map((response, index) => 
              index === prev.length - 1 
                ? { ...response, resultCount: 0, isLoading: false }
                : response
            )
          );
        }
      } catch (error) {
        console.error('Drag & drop image search error:', error);
        setFilteredProducts([]);
        setOriginalSearchResults([]);
        
        // Update response history with error
        setResponseHistory(prev => 
          prev.map((response, index) => 
            index === prev.length - 1 
              ? { ...response, resultCount: 0, isLoading: false }
              : response
          )
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  const closeLegalPage = () => {
    if (previousState) {
      // Restore previous state
      setShowSplitScreen(previousState.showSplitScreen);
      setShowBlog(previousState.showBlog);
      setSelectedArticle(previousState.selectedArticle);
      setCurrentSearchTerm(previousState.currentSearchTerm);
      setFilteredProducts(previousState.filteredProducts);
      setShowProductSearch(previousState.showProductSearch);
      setShowLegalPage(null);
      setPreviousState(null);
    } else {
      // Fallback to home screen
      setShowSplitScreen(false);
      setShowBlog(false);
      setSelectedArticle(null);
      setShowLegalPage(null);
      setSearchMethod(null);
      setShowProductSearch(true);
      setDropdowns({
        staffeln: false,
        investoren: false,
        kategorien: false,
        marken: false,
      });
      setIsLoading(true);
      setSearchQuery("");
      setSelectedImage(null);
      setSplitScreenSearchQuery("");
      setCurrentSearchTerm("");
      setActiveFilters({
        seasons: [],
        episodes: [],
        investors: [],
        categories: [],
        brands: [],
        priceRange: "all",
        popular: false,
      });
      setFilterDropdowns({
        staffel: false,
        folge: false,
        investor: false,
        kategorie: false,
        marke: false,
        preis: false,
      });
      setFilteredProducts([]);
      setOriginalSearchResults([]);
    }
  };

  const closeSplitScreen = () => {
    setShowSplitScreen(false);
    setShowBlog(false);
    setSelectedArticle(null);
    setShowLegalPage(null);
    setPreviousState(null);
    setSearchMethod(null);
    setShowProductSearch(true);
    setDropdowns({
      staffeln: false,
      investoren: false,
      kategorien: false,
      marken: false,
    });
    setIsLoading(true);
    setSearchQuery("");
    setSelectedImage(null);
    setSplitScreenSearchQuery("");
    setCurrentSearchTerm("");
    setSearchHistory([]);
    setResponseHistory([]);
    setActiveFilters({
      seasons: [],
      episodes: [],
      investors: [],
      categories: [],
      brands: [],
      priceRange: "all",
      popular: false,
    });
    setFilterDropdowns({
      staffel: false,
      folge: false,
      investor: false,
      kategorie: false,
      marke: false,
      preis: false,
    });
    setFilteredProducts([]);
  };

  const handleSplitScreenSearch = async () => {
    if (splitScreenSearchQuery.trim()) {
      setCurrentSearchTerm(splitScreenSearchQuery);
      
      // Add to search history
      const timestamp = Date.now();
      setSearchHistory(prev => [...prev, {
        term: splitScreenSearchQuery,
        timestamp,
        method: "text"
      }]);
      
      // Add loading response to history
      setResponseHistory(prev => [...prev, {
        searchTerm: splitScreenSearchQuery,
        resultCount: 0,
        timestamp,
        isLoading: true
      }]);
      
      setShowProductSearch(true);
      setIsLoading(true);
      
      // Close mobile chat drawer when search is submitted
      if (isMobile) {
        setIsChatOpen(false);
      }

      try {
        console.log(`🚀 Starting semantic split-screen search for: "${splitScreenSearchQuery.trim()}"`);
        const apiResponse = await SemanticSearchService.search(splitScreenSearchQuery.trim());
        
        if (apiResponse && apiResponse.results) {
          const mappedProducts = ProductMapper.mapApiProductsToDummy(apiResponse.results);
          setFilteredProducts(mappedProducts);
          setOriginalSearchResults(mappedProducts);
          
          // Update response history with result count
          setResponseHistory(prev => 
            prev.map((response, index) => 
              index === prev.length - 1 
                ? { ...response, resultCount: mappedProducts.length, isLoading: false }
                : response
            )
          );
        } else {
          setFilteredProducts([]);
          setOriginalSearchResults([]);
          
          // Update response history with 0 results
          setResponseHistory(prev => 
            prev.map((response, index) => 
              index === prev.length - 1 
                ? { ...response, resultCount: 0, isLoading: false }
                : response
            )
          );
        }
      } catch (error) {
        console.error('Split screen search error:', error);
        // Show empty results on API error
        setFilteredProducts([]);
        
        // Update response history with error
        setResponseHistory(prev => 
          prev.map((response, index) => 
            index === prev.length - 1 
              ? { ...response, resultCount: 0, isLoading: false }
              : response
          )
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, #dbeafe, #FCFDFE, #dbeafe)",
      }}
    >
      {/* Additional gradient overlay for more depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(219, 234, 254, 0.3), transparent, rgba(219, 234, 254, 0.2))",
        }}
      ></div>

      {/* Subtle radial gradient spots with very slow animations */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, 15, -10, 0],
          y: [0, -20, 10, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl"
        animate={{
          x: [0, -12, 18, 0],
          y: [0, 15, -8, 0],
          scale: [1, 0.95, 1.08, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      <motion.div
        className="absolute top-2/3 right-1/4 w-64 h-64 bg-blue-100/25 rounded-full blur-2xl"
        animate={{
          x: [0, 8, -15, 0],
          y: [0, -12, 6, 0],
          scale: [1, 1.02, 0.96, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      />

      {/* Additional floating elements for more fluid motion */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-50/10 rounded-full blur-3xl"
        animate={{
          x: [0, -20, 12, 0],
          y: [0, 8, -14, 0],
          scale: [1, 1.1, 0.92, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 15,
        }}
      />

      <motion.div
        className="absolute top-1/6 left-2/3 w-48 h-48 bg-blue-200/8 rounded-full blur-2xl"
        animate={{
          x: [0, 10, -6, 0],
          y: [0, -16, 11, 0],
          scale: [1, 0.88, 1.12, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />

      {/* TV Show Teaser - only visible when split screen, blog and legal pages are not active */}
      {!showSplitScreen && !showBlog && !showLegalPage && (
        <motion.div
          className="fixed top-6 right-6 z-40"
          initial={{ opacity: 0, x: 20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.a
            href="https://plus.rtl.de/video-tv/shows/die-hoehle-der-loewen-409242"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className="backdrop-blur-md rounded-2xl shadow-xl p-4 hover:shadow-2xl transition-all duration-300 max-w-sm"
              style={{
                backgroundColor: "rgba(252, 253, 254, 0.9)",
                borderColor: "rgba(252, 253, 254, 0.2)",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <Component1739SendungslogoHoehleDerLoewen1 />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-1">
                    <h3
                      className="font-medium text-sm"
                      style={{ color: "#100007" }}
                    >
                      Aktuelle Sendung
                    </h3>
                    <ExternalLink
                      className="w-3 h-3 group-hover:text-blue-600 transition-colors"
                      style={{ color: "#C0C5CA" }}
                    />
                  </div>
                  <p
                    className="text-xs transition-colors"
                    style={{ color: "#9CA3AF" }}
                  >
                    Jetzt bei RTL+ anschauen
                  </p>
                </div>
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.a>
        </motion.div>
      )}

      {/* Content area */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <motion.div
          className="w-full max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: (showSplitScreen || showBlog || showLegalPage) ? 0 : 1,
            y: (showSplitScreen || showBlog || showLegalPage) ? -30 : 0,
            scale: (showSplitScreen || showBlog || showLegalPage) ? 0.95 : 1,
          }}
          transition={{
            duration: (showSplitScreen || showBlog || showLegalPage) ? 0.3 : 0.8,
            ease: "easeOut",
          }}
        >
          {/* Main heading */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: (showSplitScreen || showBlog || showLegalPage) ? 0 : 1,
              y: (showSplitScreen || showBlog || showLegalPage) ? -20 : 0,
            }}
            transition={{
              duration: (showSplitScreen || showBlog || showLegalPage) ? 0.2 : 0.8,
              delay: (showSplitScreen || showBlog || showLegalPage) ? 0 : 0.2,
              ease: "easeOut",
            }}
          >
            <h1
              className="text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent leading-tight"
              style={{
                backgroundImage: `linear-gradient(to right, #100007, #1e3a8a, #100007)`,
              }}
            >
              Alle Höhle der Löwen-Produkte
              <br />
              hier sofort finden
            </h1>
            <p
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "#9CA3AF" }}
            >
              Du hast gerade ein interessantes Produkt bei Höhle der
              Löwen gesehen? Oder erinnerst dich an ein
              bestimmtes, welches du in der Sendung gesehen
              hast? Dann such hier ganz einfach danach oder lade
              ein Bild davon hoch.
            </p>
          </motion.div>

          {/* Search container */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: (showSplitScreen || showBlog || showLegalPage) ? 0 : 1,
              y: (showSplitScreen || showBlog || showLegalPage) ? -20 : 0,
              scale: (showSplitScreen || showBlog || showLegalPage) ? 0.95 : 1,
            }}
            transition={{
              duration: (showSplitScreen || showBlog || showLegalPage) ? 0.2 : 0.8,
              delay: (showSplitScreen || showBlog || showLegalPage) ? 0 : 0.4,
              ease: "easeOut",
            }}
          >
            {/* Search input with backdrop */}
            <div
              className="relative backdrop-blur-md rounded-2xl shadow-xl p-2 hover:shadow-2xl transition-all duration-300"
              style={{
                backgroundColor: "rgba(252, 253, 254, 0.8)",
                borderColor: isDragOver ? "rgba(99, 102, 241, 0.5)" : "rgba(252, 253, 254, 0.2)",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    style={{ color: "#C0C5CA" }}
                  />
                  <Input
                    type="text"
                    placeholder="Produkt suchen ..."
                    value={searchQuery}
                    onChange={(e) =>
                      setSearchQuery(e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                    className="w-full pl-12 pr-4 py-4 bg-transparent border-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none text-lg"
                    style={{ color: "#374151" }}
                  />
                  <style>{`
                    input {
                      user-select: text !important;
                      -webkit-user-select: text !important;
                      -moz-user-select: text !important;
                      -ms-user-select: text !important;
                    }
                    /* Global text selection override for all inputs */
                    * {
                      -webkit-user-select: text;
                      -moz-user-select: text;
                      -ms-user-select: text;
                      user-select: text;
                    }
                    *::selection {
                      background-color: rgba(25, 83, 95, 0.7) !important;
                      color: #FCFDFE !important;
                    }
                    *::-moz-selection {
                      background-color: rgba(25, 83, 95, 0.7) !important;
                      color: #FCFDFE !important;
                    }
                    input::placeholder {
                      color: #c0c5ca;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;
                      width: 100%;
                      display: block;
                    }
                    input::-webkit-input-placeholder {
                      color: #c0c5ca;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;
                    }
                    input::-moz-placeholder {
                      color: #c0c5ca;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;
                    }
                    input:-ms-input-placeholder {
                      color: #c0c5ca;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;
                    }
                    /* Text selection highlighting for home screen */
                    input::selection {
                      background-color: rgba(25, 83, 95, 0.7) !important;
                      color: #FCFDFE !important;
                    }
                    input::-moz-selection {
                      background-color: rgba(25, 83, 95, 0.7) !important;
                      color: #FCFDFE !important;
                    }
                    input::-webkit-selection {
                      background-color: rgba(25, 83, 95, 0.7) !important;
                      color: #FCFDFE !important;
                    }
                  `}</style>
                </div>

                {/* Button container */}
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={handleSearch}
                    className={`${isMobile ? 'w-11 h-11 rounded-xl flex items-center justify-center' : 'px-6 py-2 h-11 rounded-xl'} transition-all duration-200 shadow-lg`}
                    style={{
                      backgroundColor: "#19535F",
                      color: "#FCFDFE",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "#144249";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "#19535F";
                    }}
                  >
                    <Search className="w-5 h-5 xl:hidden" />
                    <span className="hidden xl:block">Suchen</span>
                  </motion.button>

                  {/* Image upload button */}
                  <motion.button
                    onClick={handleImageSearch}
                    className={`${isMobile ? 'w-11 h-11 rounded-xl flex items-center justify-center' : 'flex items-center gap-2 px-6 py-2 h-11 rounded-xl'} transition-all duration-200`}
                    style={{
                      backgroundColor: "#F2F7F8",
                      color: "#6B7280",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "#E5E7EB";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "#F2F7F8";
                    }}
                  >
                    <Upload className={isMobile ? "w-5 h-5" : "w-4 h-4"} />
                    <span className="hidden xl:block text-sm">
                      Bild hochladen
                    </span>
                  </motion.button>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              </div>
            </div>

            {/* Quick suggestions */}
            <motion.div
              className="mt-6 flex flex-wrap gap-2 justify-center"
              initial={{ opacity: 0 }}
              animate={{
                opacity: (showSplitScreen || showBlog || showLegalPage) ? 0 : 1,
                y: (showSplitScreen || showBlog || showLegalPage) ? -10 : 0,
              }}
              transition={{
                duration: (showSplitScreen || showBlog || showLegalPage) ? 0.2 : 0.8,
                delay: (showSplitScreen || showBlog || showLegalPage) ? 0 : 0.6,
                ease: "easeOut",
              }}
            >
              {[
                "Alle Produkte",
                "Aktuelle Staffel",
                "Letzte Folge",
                "Investoren-Deals",
              ].map((suggestion, index) => (
                <button
                  key={suggestion}
                  onClick={() => {
                    if (suggestion === "Alle Produkte") {
                      handleAllProductsClick();
                    } else if (suggestion === "Aktuelle Staffel") {
                      handleCurrentSeasonClick();
                    } else if (suggestion === "Investoren-Deals") {
                      handleInvestorDealsClick();
                    } else if (suggestion === "Letzte Folge") {
                      handleLastEpisodeClick();
                    }
                  }}
                  className="px-4 py-2 backdrop-blur-sm rounded-full transition-all duration-200 text-sm"
                  style={{
                    backgroundColor: suggestion === "Alle Produkte" ? "#100007" : "#FCFDFE",
                    borderColor: suggestion === "Alle Produkte" ? "#100007" : "rgba(252, 253, 254, 0.3)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    color: suggestion === "Alle Produkte" ? "#FCFDFE" : "#6B7280",
                  }}
                  onMouseEnter={(e) => {
                    // Alle aktiven Tags bekommen einheitlich grüne Hover-Farbe
                    e.currentTarget.style.backgroundColor = "#19535F";
                    e.currentTarget.style.borderColor = "#19535F";
                    e.currentTarget.style.color = "#FCFDFE";
                  }}
                  onMouseLeave={(e) => {
                    if (suggestion === "Alle Produkte") {
                      e.currentTarget.style.backgroundColor = "#100007";
                      e.currentTarget.style.borderColor = "#100007";
                      e.currentTarget.style.color = "#FCFDFE";
                    } else {
                      e.currentTarget.style.backgroundColor = "#FCFDFE";
                      e.currentTarget.style.borderColor = "rgba(252, 253, 254, 0.3)";
                      e.currentTarget.style.color = "#6B7280";
                    }
                  }}
                >
                  {suggestion}
                </button>
              ))}
            </motion.div>


          </motion.div>
        </motion.div>
      </div>

      {/* Blog Article Detail View */}
      {selectedArticle && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Article Content */}
          <div className="h-screen px-4 py-4">
            <motion.div
              className="w-full h-full rounded-2xl flex flex-col overflow-hidden"
              style={{
                backgroundColor: "#FCFDFE",
                opacity: 1.0,
                borderColor: "rgba(252, 253, 254, 0.2)",
                borderWidth: "1px",
              }}
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Article Header */}
              <div
                className="p-8"
                style={{
                  borderBottomColor: "rgba(242, 247, 248, 0.6)",
                  borderBottomWidth: "1px",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <motion.button
                    onClick={() => setSelectedArticle(null)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm"
                    style={{
                      backgroundColor: "rgba(242, 247, 248, 0.6)",
                      color: "#6B7280",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(242, 247, 248, 0.8)";
                      e.currentTarget.style.color = "#374151";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(242, 247, 248, 0.6)";
                      e.currentTarget.style.color = "#6B7280";
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    ← Zurück zum Blog
                  </motion.button>

                  <motion.button
                    onClick={closeSplitScreen}
                    className="p-2 rounded-lg transition-colors"
                    style={{
                      backgroundColor: "rgba(242, 247, 248, 0.6)",
                      color: "#6B7280",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(242, 247, 248, 0.8)";
                      e.currentTarget.style.color = "#374151";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(242, 247, 248, 0.6)";
                      e.currentTarget.style.color = "#6B7280";
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {(() => {
                  const article = blogArticles.find(a => a.id === selectedArticle);
                  if (!article) return null;
                  
                  return (
                    <>
                      {/* Article Meta */}
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="text-xs px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: "#19535F",
                            color: "#FCFDFE",
                          }}
                        >
                          {article.category}
                        </span>
                        <span
                          className="text-sm"
                          style={{ color: "#6B7280" }}
                        >
                          {article.date} • {article.readTime}
                        </span>
                      </div>

                      {/* Article Title */}
                      <h1
                        className="text-3xl mb-4 leading-tight"
                        style={{ color: "#100007" }}
                      >
                        {article.title}
                      </h1>

                      {/* Author */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            {article.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p
                            className="font-medium"
                            style={{ color: "#100007" }}
                          >
                            {article.author}
                          </p>
                          <p
                            className="text-sm"
                            style={{ color: "#6B7280" }}
                          >
                            Investor & Unternehmer
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Article Body */}
              <div className="flex-1 overflow-y-auto">
                {(() => {
                  const article = blogArticles.find(a => a.id === selectedArticle);
                  if (!article) return null;
                  
                  return (
                    <>
                      {/* Featured Image */}
                      <div className="px-8 pt-6">
                        <div className="w-full h-64 rounded-xl overflow-hidden mb-8">
                          <ImageWithFallback
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Article Content */}
                      <div className="px-8 pb-8">
                        <div 
                          className="max-w-none article-content"
                          style={{ 
                            color: "#374151",
                            lineHeight: "1.7"
                          }}
                          dangerouslySetInnerHTML={{ 
                            __html: article.content
                          }}
                        />
                        
                        <style>{`
                          .article-content h2 {
                            color: #100007;
                            font-size: 1.5rem;
                            font-weight: 600;
                            margin: 2rem 0 1rem 0;
                            line-height: 1.4;
                          }
                          
                          .article-content h3 {
                            color: #100007;
                            font-size: 1.25rem;
                            font-weight: 600;
                            margin: 1.5rem 0 0.75rem 0;
                            line-height: 1.4;
                          }
                          
                          .article-content h4 {
                            color: #100007;
                            font-size: 1.1rem;
                            font-weight: 600;
                            margin: 1.25rem 0 0.5rem 0;
                            line-height: 1.4;
                          }
                          
                          .article-content p {
                            margin: 1rem 0;
                            font-size: 1rem;
                            line-height: 1.7;
                          }
                          
                          .article-content ul, .article-content ol {
                            margin: 1rem 0;
                            padding-left: 1.5rem;
                          }
                          
                          .article-content li {
                            margin: 0.5rem 0;
                            line-height: 1.6;
                          }
                          
                          .article-content blockquote {
                            border-left: 4px solid #19535F;
                            padding-left: 1rem;
                            margin: 1.5rem 0;
                            font-style: italic;
                            background-color: rgba(242, 247, 248, 0.5);
                            padding: 1rem;
                            border-radius: 0.5rem;
                            color: #374151;
                          }
                          
                          .article-content strong {
                            font-weight: 600;
                            color: #100007;
                          }
                        `}</style>

                        {/* Back to Blog Button */}
                        <div className="mt-12 pt-8" style={{ borderTopColor: "rgba(242, 247, 248, 0.6)", borderTopWidth: "1px" }}>
                          <motion.button
                            onClick={() => setSelectedArticle(null)}
                            className="px-6 py-3 rounded-xl transition-colors"
                            style={{
                              backgroundColor: "#19535F",
                              color: "#FCFDFE",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#144249";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "#19535F";
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            ← Zurück zu allen Artikeln
                          </motion.button>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Legal Pages Overlay */}
      {showLegalPage && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            // Close dropdowns when clicking on background
            if (e.target === e.currentTarget) {
              setDropdowns({
                staffeln: false,
                investoren: false,
                kategorien: false,
                marken: false,
              });
            }
          }}
        >
          {/* Top Navigation */}
          <motion.nav
            className="backdrop-blur-md px-6 py-4 relative z-[120]"
            style={{
              backgroundColor: "rgba(252, 253, 254, 0)",
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center justify-between">
              {/* Logo/Brand - Now clickable to return to home */}
              <motion.button
                onClick={closeSplitScreen}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-8 h-8 group-hover:drop-shadow-md transition-all duration-200">
                  <ImageWithFallback
                    src="/DHDL_Shop_Logo.svg"
                    alt="Höhle der Löwen Logo - Zurück zur Startseite"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span
                  className="text-sm transition-colors opacity-0 group-hover:opacity-100 duration-200"
                  style={{ color: "#100007" }}
                >
                  Startseite
                </span>
              </motion.button>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-6 relative">
                <button
                  onClick={handleAllProductsClick}
                  className="text-sm transition-colors"
                  style={{ color: "#100007" }}
                >
                  Alle Produkte
                </button>

                {/* Staffeln Dropdown */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown("staffeln");
                    }}
                    className="flex items-center gap-1 text-sm transition-colors"
                    style={{ color: "#100007" }}
                  >
                    Staffeln
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${dropdowns.staffeln ? "rotate-180" : ""}`}
                    />
                  </button>

                  {dropdowns.staffeln && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 backdrop-blur-md rounded-xl shadow-xl py-2 min-w-[180px] z-[200]"
                      style={{
                        backgroundColor:
                          "rgba(252, 253, 254, 0.95)",
                        borderColor: "rgba(252, 253, 254, 0.2)",
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {getAvailableStaffeln().map((staffel) => (
                        <button
                          key={staffel}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStaffelClick(staffel);
                          }}
                          className="w-full px-4 py-2 text-left text-sm transition-colors"
                          style={{ color: "#374151" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "rgba(242, 247, 248, 0.6)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }}
                        >
                          {staffel}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Investoren Dropdown */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown("investoren");
                    }}
                    className="flex items-center gap-1 text-sm transition-colors"
                    style={{ color: "#100007" }}
                  >
                    Investoren
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${dropdowns.investoren ? "rotate-180" : ""}`}
                    />
                  </button>

                  {dropdowns.investoren && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 backdrop-blur-md rounded-xl shadow-xl py-2 min-w-[180px] z-[200]"
                      style={{
                        backgroundColor:
                          "rgba(252, 253, 254, 0.95)",
                        borderColor: "rgba(252, 253, 254, 0.2)",
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {getAvailableInvestoren().map(
                        (investor) => (
                          <button
                            key={investor}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleInvestorClick(investor);
                            }}
                            className="w-full px-4 py-2 text-left text-sm transition-colors"
                            style={{ color: "#374151" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgba(242, 247, 248, 0.6)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "transparent";
                            }}
                          >
                            {investor}
                          </button>
                        ),
                      )}
                    </motion.div>
                  )}
                </div>

                {/* Kategorien Dropdown - only show if categories are available */}
                {availableKategorien.length > 0 && (
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown("kategorien");
                    }}
                    className="flex items-center gap-1 text-sm transition-colors"
                    style={{ color: "#100007" }}
                  >
                    Kategorien
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${dropdowns.kategorien ? "rotate-180" : ""}`}
                    />
                  </button>

                  {dropdowns.kategorien && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 backdrop-blur-md rounded-xl shadow-xl py-2 min-w-[200px] z-[200]"
                      style={{
                        backgroundColor:
                          "rgba(252, 253, 254, 0.95)",
                        borderColor: "rgba(252, 253, 254, 0.2)",
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {getAvailableKategorien().map(
                        (kategorie) => (
                          <button
                            key={kategorie}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleKategorieClick(kategorie);
                            }}
                            className="w-full px-4 py-2 text-left text-sm transition-colors"
                            style={{ color: "#374151" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgba(242, 247, 248, 0.6)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "transparent";
                            }}
                          >
                            {kategorie}
                          </button>
                        ),
                      )}
                    </motion.div>
                  )}
                </div>
                )}

                {/* Marken Dropdown */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown("marken");
                    }}
                    className="flex items-center gap-1 text-sm transition-colors"
                    style={{ color: "#100007" }}
                  >
                    Marken
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${dropdowns.marken ? "rotate-180" : ""}`}
                    />
                  </button>

                  {dropdowns.marken && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 backdrop-blur-md rounded-xl shadow-xl py-2 min-w-[180px] z-[200]"
                      style={{
                        backgroundColor:
                          "rgba(252, 253, 254, 0.95)",
                        borderColor: "rgba(252, 253, 254, 0.2)",
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {getAvailableMarken().map(
                        (marke) => (
                          <button
                            key={marke}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleMarkenClick(marke);
                            }}
                            className="w-full px-4 py-2 text-left text-sm transition-colors"
                            style={{ color: "#374151" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgba(242, 247, 248, 0.6)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "transparent";
                            }}
                          >
                            {marke}
                          </button>
                        ),
                      )}
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center gap-3">
                {/* Back to Product Search Button - hidden on mobile */}
                {!isMobile && (
                  <motion.button
                    onClick={() => {
                      // Restore previous state or go to product search
                      if (previousState) {
                        setShowSplitScreen(previousState.showSplitScreen);
                        setShowBlog(previousState.showBlog);
                        setSelectedArticle(previousState.selectedArticle);
                        setCurrentSearchTerm(previousState.currentSearchTerm);
                        setFilteredProducts(previousState.filteredProducts);
                        setShowProductSearch(previousState.showProductSearch);
                        setShowLegalPage(null);
                        setPreviousState(null);
                      } else {
                        // Reset states and trigger animations
                        setShowProductSearch(false);
                        setShowLegalPage(null);
                        setShowSplitScreen(true);
                        setCurrentSearchTerm("Alle Produkte");
                        setFilteredProducts([]);
                        setIsLoading(true);
                        
                        // Small delay to let React process the state change
                        setTimeout(() => {
                          setShowProductSearch(true);
                        }, 50);
                        
                        // Simulate loading time
                        setTimeout(() => {
                          setIsLoading(false);
                        }, 1000);
                      }
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm"
                    style={{
                      backgroundColor: "#19535F",
                      color: "#FCFDFE",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "#144249";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "#19535F";
                    }}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Search className="w-4 h-4" />
                    <span className="hidden lg:block">
                      Zur Produktsuche
                    </span>
                  </motion.button>
                )}

                <motion.button
                  onClick={() => setShowMenu(true)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm"
                  style={{
                    backgroundColor: "rgba(242, 247, 248, 0.6)",
                    color: "#6B7280",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(242, 247, 248, 0.8)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(242, 247, 248, 0.6)";
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Menu className="w-4 h-4" />
                  <span className="hidden sm:block">Menü</span>
                </motion.button>
              </div>
            </div>
          </motion.nav>

          {/* Legal Page Content */}
          <div className="h-[calc(100vh-72px)] px-4 py-4">
            <motion.div
              className="w-full h-full rounded-2xl flex flex-col overflow-hidden"
              style={{
                backgroundColor: "#FCFDFE",
                opacity: 1.0,
                borderColor: "rgba(252, 253, 254, 0.2)",
                borderWidth: "1px",
              }}
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Legal Page Header */}
              <div
                className="p-8"
                style={{
                  borderBottomColor: "rgba(242, 247, 248, 0.6)",
                  borderBottomWidth: "1px",
                }}
              >
                {/* Legal Page Title */}
                <h1
                  className="text-3xl mb-4 leading-tight"
                  style={{ color: "#100007" }}
                >
                  {legalPagesContent[showLegalPage as keyof typeof legalPagesContent]?.title}
                </h1>

                <p
                  className="text-sm"
                  style={{ color: "#6B7280" }}
                >
                  Zuletzt aktualisiert: Dezember 2024
                </p>
              </div>

              {/* Legal Page Body */}
              <div className="flex-1 overflow-y-auto">
                <div className="px-8 pb-8">
                  {/* Special handling for FAQ page */}
                  {showLegalPage === "FAQ" ? (
                    <div className="space-y-4">
                      {legalPagesContent.FAQ.faqItems?.map((faq) => (
                        <motion.div
                          key={faq.id}
                          className="border rounded-xl overflow-hidden"
                          style={{
                            borderColor: "rgba(209, 213, 219, 0.3)",
                            backgroundColor: "#FCFDFE",
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: faq.id * 0.05 }}
                        >
                          <button
                            onClick={() => toggleFAQ(faq.id)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                          >
                            <span 
                              className="font-semibold pr-4"
                              style={{ color: "#100007" }}
                            >
                              {faq.question}
                            </span>
                            <ChevronDown 
                              className={`w-5 h-5 transition-transform duration-200 flex-shrink-0 ${
                                expandedFAQs.has(faq.id) ? 'rotate-180' : ''
                              }`}
                              style={{ color: "#6B7280" }}
                            />
                          </button>
                          
                          <motion.div
                            initial={false}
                            animate={{
                              height: expandedFAQs.has(faq.id) ? 'auto' : 0,
                              opacity: expandedFAQs.has(faq.id) ? 1 : 0
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div 
                              className="px-6 pb-4 border-t"
                              style={{ 
                                borderColor: "rgba(209, 213, 219, 0.2)",
                                color: "#374151",
                                lineHeight: "1.7"
                              }}
                              dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                          </motion.div>
                        </motion.div>
                      ))}
                      
                      <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(209, 213, 219, 0.2)" }}>
                        <p style={{ color: "#6B7280", textAlign: "center" }}>
                          <strong>Zuletzt aktualisiert:</strong> August 2025
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div 
                      className="max-w-none legal-content"
                      style={{ 
                        color: "#374151",
                        lineHeight: "1.7"
                      }}
                      dangerouslySetInnerHTML={{ 
                        __html: legalPagesContent[showLegalPage as keyof typeof legalPagesContent]?.content || ""
                      }}
                    />
                  )}
                  
                  <style>{`
                    .legal-content h2 {
                      color: #100007;
                      font-size: 1.5rem;
                      font-weight: 600;
                      margin: 2rem 0 1rem 0;
                      line-height: 1.4;
                    }
                    
                    .legal-content h3 {
                      color: #100007;
                      font-size: 1.25rem;
                      font-weight: 600;
                      margin: 1.5rem 0 0.75rem 0;
                      line-height: 1.4;
                    }
                    
                    .legal-content h4 {
                      color: #100007;
                      font-size: 1.1rem;
                      font-weight: 600;
                      margin: 1.25rem 0 0.5rem 0;
                      line-height: 1.4;
                    }
                    
                    .legal-content p {
                      margin: 1rem 0;
                      font-size: 1rem;
                      line-height: 1.7;
                    }
                    
                    .legal-content ul, .legal-content ol {
                      margin: 1rem 0;
                      padding-left: 1.5rem;
                    }
                    
                    .legal-content li {
                      margin: 0.5rem 0;
                      line-height: 1.6;
                    }
                    
                    .legal-content a {
                      color: #19535F;
                      text-decoration: underline;
                    }
                    
                    .legal-content a:hover {
                      color: #144249;
                    }
                    
                    .legal-content strong {
                      font-weight: 600;
                      color: #100007;
                    }
                  `}</style>

                  {/* Back to Previous State Button */}
                  <div className="mt-12 pt-8" style={{ borderTopColor: "rgba(242, 247, 248, 0.6)", borderTopWidth: "1px" }}>
                    <motion.button
                      onClick={closeLegalPage}
                      className="px-6 py-3 rounded-xl transition-colors"
                      style={{
                        backgroundColor: "#19535F",
                        color: "#FCFDFE",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#144249";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#19535F";
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      ← Zurück zur letzten Seite
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Blog Overlay */}
      {showBlog && !selectedArticle && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            // Close dropdowns when clicking on background
            if (e.target === e.currentTarget) {
              setDropdowns({
                staffeln: false,
                investoren: false,
                kategorien: false,
                marken: false,
              });
            }
          }}
        >
          {/* Top Navigation */}
          <motion.nav
            className="backdrop-blur-md px-6 py-4 relative z-[120]"
            style={{
              backgroundColor: "rgba(252, 253, 254, 0)",
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center justify-between">
              {/* Logo/Brand - Now clickable to return to home */}
              <motion.button
                onClick={closeSplitScreen}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-8 h-8 group-hover:drop-shadow-md transition-all duration-200">
                  <ImageWithFallback
                    src="/DHDL_Shop_Logo.svg"
                    alt="Höhle der Löwen Logo - Zurück zur Startseite"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span
                  className="text-sm transition-colors opacity-0 group-hover:opacity-100 duration-200"
                  style={{ color: "#100007" }}
                >
                  Startseite
                </span>
              </motion.button>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-6 relative">
                <button
                  onClick={handleAllProductsClick}
                  className="text-sm transition-colors"
                  style={{ color: "#100007" }}
                >
                  Alle Produkte
                </button>

                {/* Staffeln Dropdown */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown("staffeln");
                    }}
                    className="flex items-center gap-1 text-sm transition-colors"
                    style={{ color: "#100007" }}
                  >
                    Staffeln
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${dropdowns.staffeln ? "rotate-180" : ""}`}
                    />
                  </button>

                  {dropdowns.staffeln && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 backdrop-blur-md rounded-xl shadow-xl py-2 min-w-[180px] z-[200]"
                      style={{
                        backgroundColor:
                          "rgba(252, 253, 254, 0.95)",
                        borderColor: "rgba(252, 253, 254, 0.2)",
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {getAvailableStaffeln().map((staffel) => (
                        <button
                          key={staffel}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStaffelClick(staffel);
                          }}
                          className="w-full px-4 py-2 text-left text-sm transition-colors"
                          style={{ color: "#374151" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "rgba(242, 247, 248, 0.6)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }}
                        >
                          {staffel}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Investoren Dropdown */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown("investoren");
                    }}
                    className="flex items-center gap-1 text-sm transition-colors"
                    style={{ color: "#100007" }}
                  >
                    Investoren
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${dropdowns.investoren ? "rotate-180" : ""}`}
                    />
                  </button>

                  {dropdowns.investoren && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 backdrop-blur-md rounded-xl shadow-xl py-2 min-w-[180px] z-[200]"
                      style={{
                        backgroundColor:
                          "rgba(252, 253, 254, 0.95)",
                        borderColor: "rgba(252, 253, 254, 0.2)",
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {getAvailableInvestoren().map(
                        (investor) => (
                          <button
                            key={investor}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleInvestorClick(investor);
                            }}
                            className="w-full px-4 py-2 text-left text-sm transition-colors"
                            style={{ color: "#374151" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgba(242, 247, 248, 0.6)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "transparent";
                            }}
                          >
                            {investor}
                          </button>
                        ),
                      )}
                    </motion.div>
                  )}
                </div>

                {/* Kategorien Dropdown - only show if categories are available */}
                {availableKategorien.length > 0 && (
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown("kategorien");
                    }}
                    className="flex items-center gap-1 text-sm transition-colors"
                    style={{ color: "#100007" }}
                  >
                    Kategorien
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${dropdowns.kategorien ? "rotate-180" : ""}`}
                    />
                  </button>

                  {dropdowns.kategorien && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 backdrop-blur-md rounded-xl shadow-xl py-2 min-w-[200px] z-[200]"
                      style={{
                        backgroundColor:
                          "rgba(252, 253, 254, 0.95)",
                        borderColor: "rgba(252, 253, 254, 0.2)",
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {getAvailableKategorien().map(
                        (kategorie) => (
                          <button
                            key={kategorie}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleKategorieClick(kategorie);
                            }}
                            className="w-full px-4 py-2 text-left text-sm transition-colors"
                            style={{ color: "#374151" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgba(242, 247, 248, 0.6)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "transparent";
                            }}
                          >
                            {kategorie}
                          </button>
                        ),
                      )}
                    </motion.div>
                  )}
                </div>
                )}

                {/* Marken Dropdown */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown("marken");
                    }}
                    className="flex items-center gap-1 text-sm transition-colors"
                    style={{ color: "#100007" }}
                  >
                    Marken
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${dropdowns.marken ? "rotate-180" : ""}`}
                    />
                  </button>

                  {dropdowns.marken && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 backdrop-blur-md rounded-xl shadow-xl py-2 min-w-[180px] z-[200]"
                      style={{
                        backgroundColor:
                          "rgba(252, 253, 254, 0.95)",
                        borderColor: "rgba(252, 253, 254, 0.2)",
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {getAvailableMarken().map(
                        (marke) => (
                          <button
                            key={marke}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleMarkenClick(marke);
                            }}
                            className="w-full px-4 py-2 text-left text-sm transition-colors"
                            style={{ color: "#374151" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgba(242, 247, 248, 0.6)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "transparent";
                            }}
                          >
                            {marke}
                          </button>
                        ),
                      )}
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center gap-3">
                {/* Back to Product Search Button - hidden on mobile */}
                {!isMobile && (
                  <motion.button
                    onClick={() => {
                    // Reset states and trigger animations
                    setShowProductSearch(false);
                    setShowBlog(false);
                    setShowSplitScreen(true);
                    setCurrentSearchTerm("Alle Produkte");
                    setFilteredProducts([]);
                    setIsLoading(true);
                    
                    // Small delay to let React process the state change
                    setTimeout(() => {
                      setShowProductSearch(true);
                    }, 50);
                    
                    // Simulate loading time
                    setTimeout(() => {
                      setIsLoading(false);
                    }, 1000);
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm"
                  style={{
                    backgroundColor: "#19535F",
                    color: "#FCFDFE",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "#144249";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "#19535F";
                  }}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Search className="w-4 h-4" />
                  <span className="hidden lg:block">
                    Zur Produktsuche
                  </span>
                </motion.button>
                )}

                <motion.button
                  onClick={() => setShowMenu(true)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm"
                  style={{
                    backgroundColor: "rgba(242, 247, 248, 0.6)",
                    color: "#6B7280",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(242, 247, 248, 0.8)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(242, 247, 248, 0.6)";
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Menu className="w-4 h-4" />
                  <span className="hidden sm:block">Menü</span>
                </motion.button>
              </div>
            </div>
          </motion.nav>

          {/* Blog Content */}
          <div className="h-[calc(100vh-72px)] px-4 py-4">
            <motion.div
              className="w-full h-full rounded-2xl flex flex-col overflow-hidden"
              style={{
                backgroundColor: "#FCFDFE",
                opacity: 1.0,
                borderColor: "rgba(252, 253, 254, 0.2)",
                borderWidth: "1px",
              }}
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Blog Header */}
              <div
                className="p-8 text-center"
                style={{
                  borderBottomColor: "rgba(242, 247, 248, 0.6)",
                  borderBottomWidth: "1px",
                }}
              >
                <h2
                  className="text-2xl mb-2"
                  style={{ color: "#100007" }}
                >
                  Höhle der Löwen Blog
                </h2>
                <p
                  className="text-base max-w-2xl mx-auto"
                  style={{ color: "#6B7280" }}
                >
                  Erfahre mehr über die Produkte, Gründer und Investoren aus der Show. 
                  Hier findest du spannende Hintergründe und Updates zu deinen Lieblingsprodukten.
                </p>
              </div>

              {/* Blog Articles */}
              <div className="flex-1 p-8 overflow-y-auto">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {/* Article 1 */}
                  <motion.article
                    className="backdrop-blur-sm rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-200 flex flex-col h-full"
                    style={{
                      backgroundColor: "rgba(252, 253, 254, 0.8)",
                      borderColor: "rgba(252, 253, 254, 0.3)",
                      borderWidth: "1px",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Article Image */}
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4">
                        <span
                          className="text-xs px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: "#19535F",
                            color: "#FCFDFE",
                          }}
                        >
                          Success Story
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span
                          className="text-xs px-2 py-1 rounded backdrop-blur-sm"
                          style={{ 
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            color: "#FCFDFE" 
                          }}
                        >
                          15. Dez 2024
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <h3
                        className="text-lg mb-3 leading-tight"
                        style={{ color: "#100007" }}
                      >
                        BIOM8: Vom Deal zur Millionen-Marke
                      </h3>
                      <p
                        className="text-sm mb-4 leading-relaxed flex-1"
                        style={{ color: "#6B7280" }}
                      >
                        Nach dem erfolgreichen Deal mit Judith Williams hat sich BIOM8 
                        zu einer der erfolgreichsten Marken der Staffel entwickelt. 
                        Das Probiotika-Unternehmen konnte den Umsatz um 400% steigern...
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                            <span className="text-white text-xs font-medium">JW</span>
                          </div>
                          <span
                            className="text-xs"
                            style={{ color: "#374151" }}
                          >
                            Judith Williams
                          </span>
                        </div>
                        <button
                          onClick={() => setSelectedArticle(1)}
                          className="flex items-center gap-1 text-xs transition-colors"
                          style={{ color: "#19535F" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#144249";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#19535F";
                          }}
                        >
                          Lesen
                          <ChevronDown className="w-3 h-3 transform -rotate-90" />
                        </button>
                      </div>
                    </div>
                  </motion.article>

                  {/* Article 2 */}
                  <motion.article
                    className="backdrop-blur-sm rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-200 flex flex-col h-full"
                    style={{
                      backgroundColor: "rgba(252, 253, 254, 0.8)",
                      borderColor: "rgba(252, 253, 254, 0.3)",
                      borderWidth: "1px",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Article Image */}
                    <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4">
                        <span
                          className="text-xs px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: "#100007",
                            color: "#FCFDFE",
                          }}
                        >
                          Analyse
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span
                          className="text-xs px-2 py-1 rounded backdrop-blur-sm"
                          style={{ 
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            color: "#FCFDFE" 
                          }}
                        >
                          12. Dez 2024
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <h3
                        className="text-lg mb-3 leading-tight"
                        style={{ color: "#100007" }}
                      >
                        Die erfolgreichsten Kategorien in Staffel 16
                      </h3>
                      <p
                        className="text-sm mb-4 leading-relaxed flex-1"
                        style={{ color: "#6B7280" }}
                      >
                        Eine Analyse der aktuellen Staffel zeigt: Gesundheits- und 
                        Lifestyle-Produkte dominieren weiterhin die Show. Wir schauen 
                        uns die Trends genauer an und erklären, warum bestimmte 
                        Produktkategorien bei den Investoren besonders beliebt sind...
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                            <span className="text-white text-xs font-medium">RD</span>
                          </div>
                          <span
                            className="text-xs"
                            style={{ color: "#374151" }}
                          >
                            Ralf Dümmel
                          </span>
                        </div>
                        <button
                          onClick={() => setSelectedArticle(2)}
                          className="flex items-center gap-1 text-xs transition-colors"
                          style={{ color: "#19535F" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#144249";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#19535F";
                          }}
                        >
                          Lesen
                          <ChevronDown className="w-3 h-3 transform -rotate-90" />
                        </button>
                      </div>
                    </div>
                  </motion.article>

                  {/* Article 3 */}
                  <motion.article
                    className="backdrop-blur-sm rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-200 flex flex-col h-full"
                    style={{
                      backgroundColor: "rgba(252, 253, 254, 0.8)",
                      borderColor: "rgba(252, 253, 254, 0.3)",
                      borderWidth: "1px",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Article Image */}
                    <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4">
                        <span
                          className="text-xs px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: "rgba(242, 247, 248, 0.9)",
                            color: "#374151",
                            borderColor: "rgba(252, 253, 254, 0.3)",
                            borderWidth: "1px",
                          }}
                        >
                          Interview
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span
                          className="text-xs px-2 py-1 rounded backdrop-blur-sm"
                          style={{ 
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            color: "#FCFDFE" 
                          }}
                        >
                          10. Dez 2024
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <h3
                        className="text-lg mb-3 leading-tight"
                        style={{ color: "#100007" }}
                      >
                        Frank Thelen über die Zukunft der Startup-Szene
                      </h3>
                      <p
                        className="text-sm mb-4 leading-relaxed flex-1"
                        style={{ color: "#6B7280" }}
                      >
                        Im exklusiven Interview spricht Frank Thelen über seine Vision 
                        für deutsche Startups, die Bedeutung von Künstlicher Intelligenz 
                        und warum er bei bestimmten Produkten sofort 'ja' sagt. 
                        Erfahre mehr über seine Investmentstrategie...
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                            <span className="text-white text-xs font-medium">FT</span>
                          </div>
                          <span
                            className="text-xs"
                            style={{ color: "#374151" }}
                          >
                            Frank Thelen
                          </span>
                        </div>
                        <button
                          onClick={() => setSelectedArticle(3)}
                          className="flex items-center gap-1 text-xs transition-colors"
                          style={{ color: "#19535F" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#144249";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#19535F";
                          }}
                        >
                          Lesen
                          <ChevronDown className="w-3 h-3 transform -rotate-90" />
                        </button>
                      </div>
                    </div>
                  </motion.article>

                  {/* Article 4 */}
                  <motion.article
                    className="backdrop-blur-sm rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-200 flex flex-col h-full"
                    style={{
                      backgroundColor: "rgba(252, 253, 254, 0.8)",
                      borderColor: "rgba(252, 253, 254, 0.3)",
                      borderWidth: "1px",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Article Image */}
                    <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4">
                        <span
                          className="text-xs px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: "#19535F",
                            color: "#FCFDFE",
                          }}
                        >
                          Tipps
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span
                          className="text-xs px-2 py-1 rounded backdrop-blur-sm"
                          style={{ 
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            color: "#FCFDFE" 
                          }}
                        >
                          8. Dez 2024
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <h3
                        className="text-lg mb-3 leading-tight"
                        style={{ color: "#100007" }}
                      >
                        5 Tipps für angehende Gründer von Carsten Maschmeyer
                      </h3>
                      <p
                        className="text-sm mb-4 leading-relaxed flex-1"
                        style={{ color: "#6B7280" }}
                      >
                        Was macht ein erfolgreiches Pitch aus? Carsten Maschmeyer verrät 
                        seine wichtigsten Tipps für Gründer, die bei den Löwen punkten 
                        wollen. Von der Vorbereitung bis zur Verhandlung - hier sind 
                        die Erfolgsgeheimnisse...
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center">
                            <span className="text-white text-xs font-medium">CM</span>
                          </div>
                          <span
                            className="text-xs"
                            style={{ color: "#374151" }}
                          >
                            Carsten Maschmeyer
                          </span>
                        </div>
                        <button
                          onClick={() => setSelectedArticle(4)}
                          className="flex items-center gap-1 text-xs transition-colors"
                          style={{ color: "#19535F" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#144249";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#19535F";
                          }}
                        >
                          Lesen
                          <ChevronDown className="w-3 h-3 transform -rotate-90" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Split Screen Overlay */}
      {showSplitScreen && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            // Close dropdowns when clicking on background
            if (e.target === e.currentTarget) {
              setDropdowns({
                staffeln: false,
                investoren: false,
                kategorien: false,
                marken: false,
              });
              setFilterDropdowns({
                staffel: false,
                folge: false,
                investor: false,
                kategorie: false,
                marke: false,
                preis: false,
              });
            }
          }}
        >
          {/* Top Navigation */}
          <motion.nav
            className="backdrop-blur-md px-6 py-4 relative z-[120]"
            style={{
              backgroundColor: "rgba(252, 253, 254, 0)",
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center justify-between">
              {/* Logo/Brand - Now clickable to return to home */}
              <motion.button
                onClick={closeSplitScreen}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-8 h-8 group-hover:drop-shadow-md transition-all duration-200">
                  <ImageWithFallback
                    src="/DHDL_Shop_Logo.svg"
                    alt="Höhle der Löwen Logo - Zurück zur Startseite"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span
                  className="text-sm transition-colors opacity-0 group-hover:opacity-100 duration-200"
                  style={{ color: "#100007" }}
                >
                  Startseite
                </span>
              </motion.button>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-6 relative">
                <button
                  onClick={handleAllProductsClick}
                  className="text-sm transition-colors"
                  style={{ color: "#100007" }}
                >
                  Alle Produkte
                </button>

                {/* Staffeln Dropdown */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown("staffeln");
                    }}
                    className="flex items-center gap-1 text-sm transition-colors"
                    style={{ color: "#100007" }}
                  >
                    Staffeln
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${dropdowns.staffeln ? "rotate-180" : ""}`}
                    />
                  </button>

                  {dropdowns.staffeln && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 backdrop-blur-md rounded-xl shadow-xl py-2 min-w-[180px] z-[200]"
                      style={{
                        backgroundColor:
                          "rgba(252, 253, 254, 0.95)",
                        borderColor: "rgba(252, 253, 254, 0.2)",
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {getAvailableStaffeln().map((staffel) => (
                        <button
                          key={staffel}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStaffelClick(staffel);
                          }}
                          className="w-full px-4 py-2 text-left text-sm transition-colors"
                          style={{ color: "#374151" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "rgba(242, 247, 248, 0.6)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }}
                        >
                          {staffel}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Investoren Dropdown */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown("investoren");
                    }}
                    className="flex items-center gap-1 text-sm transition-colors"
                    style={{ color: "#100007" }}
                  >
                    Investoren
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${dropdowns.investoren ? "rotate-180" : ""}`}
                    />
                  </button>

                  {dropdowns.investoren && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 backdrop-blur-md rounded-xl shadow-xl py-2 min-w-[180px] z-[200]"
                      style={{
                        backgroundColor:
                          "rgba(252, 253, 254, 0.95)",
                        borderColor: "rgba(252, 253, 254, 0.2)",
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {getAvailableInvestoren().map(
                        (investor) => (
                          <button
                            key={investor}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleInvestorClick(investor);
                            }}
                            className="w-full px-4 py-2 text-left text-sm transition-colors"
                            style={{ color: "#374151" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgba(242, 247, 248, 0.6)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "transparent";
                            }}
                          >
                            {investor}
                          </button>
                        ),
                      )}
                    </motion.div>
                  )}
                </div>

                {/* Kategorien Dropdown - only show if categories are available */}
                {availableKategorien.length > 0 && (
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown("kategorien");
                    }}
                    className="flex items-center gap-1 text-sm transition-colors"
                    style={{ color: "#100007" }}
                  >
                    Kategorien
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${dropdowns.kategorien ? "rotate-180" : ""}`}
                    />
                  </button>

                  {dropdowns.kategorien && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 backdrop-blur-md rounded-xl shadow-xl py-2 min-w-[200px] z-[200]"
                      style={{
                        backgroundColor:
                          "rgba(252, 253, 254, 0.95)",
                        borderColor: "rgba(252, 253, 254, 0.2)",
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {getAvailableKategorien().map(
                        (kategorie) => (
                          <button
                            key={kategorie}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleKategorieClick(kategorie);
                            }}
                            className="w-full px-4 py-2 text-left text-sm transition-colors"
                            style={{ color: "#374151" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgba(242, 247, 248, 0.6)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "transparent";
                            }}
                          >
                            {kategorie}
                          </button>
                        ),
                      )}
                    </motion.div>
                  )}
                </div>
                )}

                {/* Marken Dropdown */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown("marken");
                    }}
                    className="flex items-center gap-1 text-sm transition-colors"
                    style={{ color: "#100007" }}
                  >
                    Marken
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${dropdowns.marken ? "rotate-180" : ""}`}
                    />
                  </button>

                  {dropdowns.marken && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 backdrop-blur-md rounded-xl shadow-xl py-2 min-w-[180px] z-[200]"
                      style={{
                        backgroundColor:
                          "rgba(252, 253, 254, 0.95)",
                        borderColor: "rgba(252, 253, 254, 0.2)",
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {getAvailableMarken().map(
                        (marke) => (
                          <button
                            key={marke}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleMarkenClick(marke);
                            }}
                            className="w-full px-4 py-2 text-left text-sm transition-colors"
                            style={{ color: "#374151" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgba(242, 247, 248, 0.6)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "transparent";
                            }}
                          >
                            {marke}
                          </button>
                        ),
                      )}
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center gap-3">
                {/* Search Button - only visible when product search is hidden and not on mobile */}
                {!showProductSearch && !isMobile && (
                  <motion.button
                    onClick={handleOpenProductSearch}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm"
                    style={{
                      backgroundColor: "#19535F",
                      color: "#FCFDFE",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "#144249";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "#19535F";
                    }}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Search className="w-4 h-4" />
                    <span className="hidden lg:block">
                      Zur Produktsuche
                    </span>
                  </motion.button>
                )}

                <motion.button
                  onClick={() => setShowMenu(true)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm"
                  style={{
                    backgroundColor: "rgba(242, 247, 248, 0.6)",
                    color: "#6B7280",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(242, 247, 248, 0.8)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(242, 247, 248, 0.6)";
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Menu className="w-4 h-4" />
                  <span className="hidden sm:block">Menü</span>
                </motion.button>
              </div>
            </div>
          </motion.nav>

          {/* Split screen content */}
          <div className={`${isMobile ? 'relative' : 'flex'} h-[calc(100vh-72px)] ${isMobile ? 'px-2 py-2' : 'px-4 py-4'} ${isMobile ? '' : 'gap-4'}`}>
            {/* Desktop: Left side - Chat Window, Mobile: Drawer above bottom button */}
            {((showProductSearch && !isMobile) || (isMobile && isChatOpen)) && (
              <motion.div
                className={`${
                  isMobile 
                    ? 'fixed bottom-0 left-0 right-0 z-[1000] bg-white rounded-t-2xl shadow-2xl h-[70vh]'
                    : 'md:w-1/3 lg:w-1/3 ipad-mini-chat h-full rounded-2xl'
                } flex flex-col`}
                style={{
                  backgroundColor: isMobile ? "#FFFFFF" : "#FCFDFE",
                  opacity: 1.0,
                  borderColor: isDragOver ? "rgba(99, 102, 241, 0.5)" : "rgba(252, 253, 254, 0.2)",
                  borderWidth: "1px",
                }}
                initial={isMobile ? { y: '100%' } : { x: -100, opacity: 0, scale: 0.95 }}
                animate={isMobile ? { y: 0 } : { x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: isMobile ? 0.3 : 0.5, delay: isMobile ? 0 : 0.1 }}
                exit={isMobile ? { y: '100%' } : { x: -100, opacity: 0, scale: 0.95 }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {/* Header */}
                <div
                    className={`${isMobile ? 'px-4 py-3' : 'p-6'} flex items-center justify-between`}
                    style={{
                      borderBottomColor: "rgba(252, 253, 254, 0.4)",
                      borderBottomWidth: "1px",
                    }}
                  >
                  <div>
                    <div className="flex items-center gap-2">
                      <Search
                        className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`}
                        style={{ color: "#19535F" }}
                      />
                      <h3
                        className={`${isMobile ? 'text-base' : 'text-lg'} font-medium`}
                        style={{ color: "#100007" }}
                      >
                        Produktsuche
                      </h3>
                    </div>
                  </div>
                  {isMobile && (
                    <button
                      onClick={() => setIsChatOpen(false)}
                      className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-4 h-4" style={{ color: "#19535F" }} />
                    </button>
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 ${isMobile ? 'p-4' : 'p-6'} overflow-y-auto`} ref={chatContainerRef}>
                  <div className="space-y-4">
                    {/* Display search history and responses in chronological order */}
                    {searchHistory.map((search, index) => {
                      const response = responseHistory[index];
                      return (
                        <div key={`conversation-${search.timestamp}-${index}`}>
                          {/* User search bubble - right aligned */}
                          <div className="flex justify-end mb-2">
                            <div
                              className="rounded-xl p-4 shadow-lg max-w-xs"
                              style={{
                                backgroundColor: "#19535F",
                                color: "#FCFDFE",
                              }}
                            >
                              {search.method === "image" ? (
                                <div>
                                  {search.imageUrl ? (
                                    <img 
                                      src={search.imageUrl} 
                                      alt="Uploaded search image"
                                      className="w-full max-w-[120px] h-auto rounded-lg mb-2"
                                      onError={(e) => {
                                        console.log('Image failed to load:', search.imageUrl);
                                      }}
                                    />
                                  ) : (
                                    <p className="text-sm mb-2">{search.term}</p>
                                  )}
                                  <p className="text-xs opacity-70">📸 Bildersuche</p>
                                </div>
                              ) : (
                                <p className="text-sm">
                                  {search.term}
                                </p>
                              )}
                            </div>
                          </div>
                          
                          {/* App response bubble - left aligned */}
                          {response && (
                            <motion.div
                              className="flex justify-start"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.4,
                                delay: 0.2,
                              }}
                            >
                              <div
                                className="bg-transparent backdrop-blur-lg rounded-xl p-4 max-w-sm"
                                style={{
                                  borderColor: "rgba(252, 253, 254, 0.5)",
                                  borderWidth: "1px",
                                }}
                              >
                                <p
                                  className="text-sm"
                                  style={{ color: "#374151" }}
                                >
                                  {response.isLoading ? (
                                    "Suche läuft..."
                                  ) : response.resultCount > 0 ? (
                                    `Danke dir, wir haben ${response.resultCount} ${response.resultCount === 1 ? 'Ergebnis' : 'Ergebnisse'} für dich gefunden.`
                                  ) : (
                                    "Leider keine Ergebnisse gefunden. Versuche es mit anderen Suchbegriffen."
                                  )}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div
                  className="p-6"
                  style={{
                    borderTopColor: "rgba(252, 253, 254, 0.4)",
                    borderTopWidth: "1px",
                  }}
                >
                  {/* Search input with backdrop - dark theme */}
                  <div
                    className="relative backdrop-blur-md rounded-2xl shadow-xl p-2 hover:shadow-2xl transition-all duration-300"
                    style={{
                      backgroundColor: "#100007",
                      borderColor: "rgba(55, 65, 81, 0.5)",
                      borderWidth: "1px",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <Search
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                          style={{ color: "#C0C5CA" }}
                        />
                        <Input
                          type="text"
                          placeholder="Produkt suchen ..."
                          value={splitScreenSearchQuery}
                          onChange={(e) =>
                            setSplitScreenSearchQuery(
                              e.target.value,
                            )
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleSplitScreenSearch();
                            }
                          }}
                          className="w-full pl-12 pr-4 py-4 bg-transparent border-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none text-lg"
                          style={{ color: "#FCFDFE" }}
                        />
                        <style>{`
                          input {
                            user-select: text;
                            -webkit-user-select: text;
                            -moz-user-select: text;
                            -ms-user-select: text;
                          }
                          input::placeholder {
                            color: #c0c5ca;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                            width: 100%;
                            display: block;
                          }
                          input::-webkit-input-placeholder {
                            color: #c0c5ca;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                          }
                          input::-moz-placeholder {
                            color: #c0c5ca;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                          }
                          input:-ms-input-placeholder {
                            color: #c0c5ca;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                          }
                          /* Text selection highlighting for split screen */
                          input::selection {
                            background-color: rgba(252, 253, 254, 0.6) !important;
                            color: #19535F !important;
                          }
                          input::-moz-selection {
                            background-color: rgba(252, 253, 254, 0.6) !important;
                            color: #19535F !important;
                          }
                          input::-webkit-selection {
                            background-color: rgba(252, 253, 254, 0.6) !important;
                            color: #19535F !important;
                          }
                        `}</style>
                      </div>

                      {/* Button container */}
                      <div className="flex items-center gap-2">
                        <motion.button
                          onClick={handleSplitScreenSearch}
                          className={`${isMobile ? 'w-11 h-11 rounded-xl flex items-center justify-center' : 'px-6 py-2 h-11 rounded-xl'} transition-all duration-200 shadow-lg`}
                          style={{
                            backgroundColor: "#19535F",
                            color: "#FCFDFE",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "#144249";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "#19535F";
                          }}
                        >
                          <Search className="w-5 h-5 xl:hidden" />
                          <span className="hidden xl:block">Suchen</span>
                        </motion.button>

                        {/* Image upload button */}
                        <motion.button
                          onClick={() =>
                            document
                              .getElementById(
                                "split-screen-image-upload",
                              )
                              ?.click()
                          }
                          className={`${isMobile ? 'w-11 h-11 rounded-xl flex items-center justify-center' : 'flex items-center gap-2 px-6 py-2 h-11 rounded-xl'} transition-all duration-200`}
                          style={{
                            backgroundColor: "#FCFDFE",
                            color: "#6B7280",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "#F9FAFB";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "#FCFDFE";
                          }}
                        >
                          <Upload className={isMobile ? "w-5 h-5" : "w-4 h-4"} />
                          <span className="hidden xl:block text-sm">
                            Bild hochladen
                          </span>
                        </motion.button>
                        <input
                          id="split-screen-image-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Right side - Result Window */}
            <motion.div
              key={`results-panel-${showProductSearch ? 'with' : 'without'}-search`}
              className={`${
                isMobile 
                  ? 'w-full h-full' 
                  : showProductSearch ? "md:w-2/3 lg:w-2/3 ipad-mini-products" : "w-full"
              } h-full ${isMobile ? 'rounded-lg' : 'rounded-2xl'} flex flex-col relative z-[100]`}
              style={{
                backgroundColor: "#FCFDFE",
                opacity: 1.0,
                borderColor: "rgba(252, 253, 254, 0.2)",
                borderWidth: "1px",
              }}
              initial={{
                x: showProductSearch ? 100 : 0,
                opacity: 0,
                scale: 0.95,
              }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: showProductSearch ? 0.2 : 0.1,
              }}
            >
              <div
                className={`${isMobile ? 'px-4 py-4' : 'p-6'}`}
                style={{
                  borderBottomColor: "rgba(252, 253, 254, 0.3)",
                  borderBottomWidth: "1px",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingCart
                      className="w-5 h-5"
                      style={{ color: "#19535F" }}
                    />
                    <h3
                      className="text-lg font-medium"
                      style={{ color: "#100007" }}
                    >
                      Suchergebnisse
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Filter Button */}
                    <motion.button
                      onClick={() =>
                        setShowFilters(!showFilters)
                      }
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors"
                      style={{
                        backgroundColor:
                          "rgba(242, 247, 248, 0.6)",
                        borderColor: "rgba(252, 253, 254, 0.3)",
                        borderWidth: "1px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "rgba(242, 247, 248, 0.8)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "rgba(242, 247, 248, 0.6)";
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Filter
                        className="w-4 h-4"
                        style={{ color: "#6B7280" }}
                      />
                      <div className="flex items-center gap-2">
                        <span
                          className="text-sm"
                          style={{ color: "#374151" }}
                        >
                          Filter
                        </span>
                        {(activeFilters.seasons.length > 0 ||
                          activeFilters.episodes.length > 0 ||
                          activeFilters.investors.length > 0 ||
                          activeFilters.categories.length > 0 ||
                          activeFilters.brands.length > 0 ||
                          activeFilters.priceRange !== "all" ||
                          activeFilters.popular) && (
                          <span 
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: "#19535F",
                              color: "#FCFDFE",
                            }}
                          >
                            {activeFilters.seasons.length +
                              activeFilters.episodes.length +
                              activeFilters.investors.length +
                              activeFilters.categories.length +
                              activeFilters.brands.length +
                              (activeFilters.priceRange !== "all" ? 1 : 0) +
                              (activeFilters.popular ? 1 : 0)}
                          </span>
                        )}
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`}
                        style={{ color: "#9CA3AF" }}
                      />
                    </motion.button>
                  </div>
                </div>

                {/* Filter Panel */}
                {showFilters && (
                  <motion.div
                    className="mt-4 p-4 backdrop-blur-sm rounded-lg relative z-[200]"
                    style={{
                      backgroundColor:
                        "rgba(242, 247, 248, 0.6)",
                      borderColor: "rgba(252, 253, 254, 0.3)",
                      borderWidth: "1px",
                    }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                      {/* Staffel Filter Dropdown */}
                      <div className={`relative ${filterDropdowns.staffel ? 'z-[500]' : 'z-[250]'}`}>
                        <button
                          onClick={() => toggleFilterDropdown('staffel')}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 text-left"
                          style={{
                            backgroundColor: activeFilters.seasons.length > 0 ? "#19535F" : "#F2F7F8",
                            color: activeFilters.seasons.length > 0 ? "#FCFDFE" : "#374151",
                            borderColor: "rgba(252, 253, 254, 0.3)",
                            borderWidth: "1px",
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">Staffel</span>
                            {activeFilters.seasons.length > 0 && (
                              <span 
                                className="text-xs px-2 py-0.5 rounded-full"
                                style={{ 
                                  backgroundColor: "rgba(252, 253, 254, 0.2)",
                                  color: "#FCFDFE"
                                }}
                              >
                                {activeFilters.seasons.length}
                              </span>
                            )}
                          </div>
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform ${filterDropdowns.staffel ? "rotate-180" : ""}`}
                          />
                        </button>

                        {filterDropdowns.staffel && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-full backdrop-blur-md rounded-lg shadow-xl py-2 z-[600]"
                            style={{
                              backgroundColor: "rgba(252, 253, 254, 0.95)",
                              borderColor: "rgba(252, 253, 254, 0.2)",
                              borderWidth: "1px",
                            }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {currentAvailableOptions.seasons.map((season) => (
                              <label
                                key={season}
                                className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
                              >
                                <input
                                  type="checkbox"
                                  checked={activeFilters.seasons.includes(season)}
                                  onChange={() => toggleFilter("seasons", season)}
                                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm" style={{ color: "#374151" }}>
                                  {season}
                                </span>
                              </label>
                            ))}
                          </motion.div>
                        )}
                      </div>

                      {/* Folge Filter Dropdown */}
                      <div className={`relative ${filterDropdowns.folge ? 'z-[500]' : 'z-[250]'}`}>
                        <button
                          onClick={() => activeFilters.seasons.length > 0 ? toggleFilterDropdown('folge') : null}
                          disabled={activeFilters.seasons.length === 0}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                            activeFilters.seasons.length === 0 ? 'cursor-not-allowed opacity-50' : ''
                          }`}
                          style={{
                            backgroundColor: activeFilters.episodes.length > 0 ? "#19535F" : "#F2F7F8",
                            color: activeFilters.episodes.length > 0 ? "#FCFDFE" : "#374151",
                            borderColor: "rgba(252, 253, 254, 0.3)",
                            borderWidth: "1px",
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">Folge</span>
                            {activeFilters.episodes.length > 0 && (
                              <span 
                                className="text-xs px-2 py-0.5 rounded-full"
                                style={{ 
                                  backgroundColor: "rgba(252, 253, 254, 0.2)",
                                  color: "#FCFDFE"
                                }}
                              >
                                {activeFilters.episodes.length}
                              </span>
                            )}
                          </div>
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform ${filterDropdowns.folge ? "rotate-180" : ""}`}
                          />
                        </button>

                        {filterDropdowns.folge && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-full backdrop-blur-md rounded-lg shadow-xl py-2 z-[600]"
                            style={{
                              backgroundColor: "rgba(252, 253, 254, 0.95)",
                              borderColor: "rgba(252, 253, 254, 0.2)",
                              borderWidth: "1px",
                            }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {(activeFilters.seasons.length > 0 ? currentAvailableOptions.episodes : []).map((episode) => (
                              <label
                                key={episode}
                                className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
                              >
                                <input
                                  type="checkbox"
                                  checked={activeFilters.episodes.includes(episode)}
                                  onChange={() => toggleFilter("episodes", episode)}
                                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm" style={{ color: "#374151" }}>
                                  {episode}
                                </span>
                              </label>
                            ))}
                          </motion.div>
                        )}
                      </div>

                      {/* Investor Filter Dropdown */}
                      <div className={`relative ${filterDropdowns.investor ? 'z-[500]' : 'z-[250]'}`}>
                        <button
                          onClick={() => toggleFilterDropdown('investor')}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 text-left"
                          style={{
                            backgroundColor: activeFilters.investors.length > 0 ? "#19535F" : "#F2F7F8",
                            color: activeFilters.investors.length > 0 ? "#FCFDFE" : "#374151",
                            borderColor: "rgba(252, 253, 254, 0.3)",
                            borderWidth: "1px",
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">Investor</span>
                            {activeFilters.investors.length > 0 && (
                              <span 
                                className="text-xs px-2 py-0.5 rounded-full"
                                style={{ 
                                  backgroundColor: "rgba(252, 253, 254, 0.2)",
                                  color: "#FCFDFE"
                                }}
                              >
                                {activeFilters.investors.length}
                              </span>
                            )}
                          </div>
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform ${filterDropdowns.investor ? "rotate-180" : ""}`}
                          />
                        </button>

                        {filterDropdowns.investor && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-full backdrop-blur-md rounded-lg shadow-xl py-2 z-[600]"
                            style={{
                              backgroundColor: "rgba(252, 253, 254, 0.95)",
                              borderColor: "rgba(252, 253, 254, 0.2)",
                              borderWidth: "1px",
                            }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {currentAvailableOptions.investors.map((investor) => (
                              <label
                                key={investor}
                                className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
                              >
                                <input
                                  type="checkbox"
                                  checked={activeFilters.investors.includes(investor)}
                                  onChange={() => toggleFilter("investors", investor)}
                                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm" style={{ color: "#374151" }}>
                                  {investor}
                                </span>
                              </label>
                            ))}
                          </motion.div>
                        )}
                      </div>

                      {/* Kategorie Filter Dropdown */}
                      <div className={`relative ${filterDropdowns.kategorie ? 'z-[500]' : 'z-[250]'}`}>
                        <button
                          onClick={() => toggleFilterDropdown('kategorie')}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 text-left"
                          style={{
                            backgroundColor: activeFilters.categories.length > 0 ? "#19535F" : "#F2F7F8",
                            color: activeFilters.categories.length > 0 ? "#FCFDFE" : "#374151",
                            borderColor: "rgba(252, 253, 254, 0.3)",
                            borderWidth: "1px",
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">Kategorie</span>
                            {activeFilters.categories.length > 0 && (
                              <span 
                                className="text-xs px-2 py-0.5 rounded-full"
                                style={{ 
                                  backgroundColor: "rgba(252, 253, 254, 0.2)",
                                  color: "#FCFDFE"
                                }}
                              >
                                {activeFilters.categories.length}
                              </span>
                            )}
                          </div>
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform ${filterDropdowns.kategorie ? "rotate-180" : ""}`}
                          />
                        </button>

                        {filterDropdowns.kategorie && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-full backdrop-blur-md rounded-lg shadow-xl py-2 z-[600]"
                            style={{
                              backgroundColor: "rgba(252, 253, 254, 0.95)",
                              borderColor: "rgba(252, 253, 254, 0.2)",
                              borderWidth: "1px",
                            }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {currentAvailableOptions.categories.map((category) => (
                              <label
                                key={category}
                                className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
                              >
                                <input
                                  type="checkbox"
                                  checked={activeFilters.categories.includes(category)}
                                  onChange={() => toggleFilter("categories", category)}
                                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm" style={{ color: "#374151" }}>
                                  {category}
                                </span>
                              </label>
                            ))}
                          </motion.div>
                        )}
                      </div>

                      {/* Marke Filter Dropdown */}
                      <div className={`relative ${filterDropdowns.marke ? 'z-[500]' : 'z-[250]'}`}>
                        <button
                          onClick={() => toggleFilterDropdown('marke')}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 text-left"
                          style={{
                            backgroundColor: activeFilters.brands.length > 0 ? "#19535F" : "#F2F7F8",
                            color: activeFilters.brands.length > 0 ? "#FCFDFE" : "#374151",
                            borderColor: "rgba(252, 253, 254, 0.3)",
                            borderWidth: "1px",
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">Marke</span>
                            {activeFilters.brands.length > 0 && (
                              <span 
                                className="text-xs px-2 py-0.5 rounded-full"
                                style={{ 
                                  backgroundColor: "rgba(252, 253, 254, 0.2)",
                                  color: "#FCFDFE"
                                }}
                              >
                                {activeFilters.brands.length}
                              </span>
                            )}
                          </div>
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform ${filterDropdowns.marke ? "rotate-180" : ""}`}
                          />
                        </button>

                        {filterDropdowns.marke && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-full backdrop-blur-md rounded-lg shadow-xl py-2 z-[600]"
                            style={{
                              backgroundColor: "rgba(252, 253, 254, 0.95)",
                              borderColor: "rgba(252, 253, 254, 0.2)",
                              borderWidth: "1px",
                            }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {getAvailableMarken().map((brand: string) => (
                              <label
                                key={brand}
                                className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
                              >
                                <input
                                  type="checkbox"
                                  checked={activeFilters.brands.includes(brand)}
                                  onChange={() => toggleFilter("brands", brand)}
                                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm" style={{ color: "#374151" }}>
                                  {brand}
                                </span>
                              </label>
                            ))}
                          </motion.div>
                        )}
                      </div>

                      {/* Preis Filter Dropdown */}
                      <div className={`relative ${filterDropdowns.preis ? 'z-[500]' : 'z-[250]'}`}>
                        <button
                          onClick={() => toggleFilterDropdown('preis')}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 text-left"
                          style={{
                            backgroundColor: activeFilters.priceRange !== "all" ? "#19535F" : "#F2F7F8",
                            color: activeFilters.priceRange !== "all" ? "#FCFDFE" : "#374151",
                            borderColor: "rgba(252, 253, 254, 0.3)",
                            borderWidth: "1px",
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">Preis</span>
                            {activeFilters.priceRange !== "all" && (
                              <span 
                                className="text-xs px-2 py-0.5 rounded-full"
                                style={{ 
                                  backgroundColor: "rgba(252, 253, 254, 0.2)",
                                  color: "#FCFDFE"
                                }}
                              >
                                1
                              </span>
                            )}
                          </div>
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform ${filterDropdowns.preis ? "rotate-180" : ""}`}
                          />
                        </button>

                        {filterDropdowns.preis && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-full backdrop-blur-md rounded-lg shadow-xl py-2 z-[600]"
                            style={{
                              backgroundColor: "rgba(252, 253, 254, 0.95)",
                              borderColor: "rgba(252, 253, 254, 0.2)",
                              borderWidth: "1px",
                            }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {[
                              { value: "under-20", label: "Unter 20€" },
                              { value: "20-50", label: "20€ - 50€" },
                              { value: "under-50", label: "Unter 50€" },
                              { value: "over-50", label: "Über 50€" },
                            ].map((price) => (
                              <label
                                key={price.value}
                                className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
                              >
                                <input
                                  type="radio"
                                  name="priceRange"
                                  checked={activeFilters.priceRange === price.value}
                                  onChange={() => toggleFilter("priceRange", price.value)}
                                  className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm" style={{ color: "#374151" }}>
                                  {price.label}
                                </span>
                              </label>
                            ))}
                          </motion.div>
                        )}
                      </div>

                      {/* Aktuell beliebt Filter Toggle - HIDDEN */}
                      {false && (
                        <div className="relative z-[250]">
                          <button
                            onClick={() => toggleFilter("popular", !activeFilters.popular)}
                            className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 text-left"
                            style={{
                              backgroundColor: activeFilters.popular ? "#19535F" : "#F2F7F8",
                              color: activeFilters.popular ? "#FCFDFE" : "#374151",
                              borderColor: "rgba(252, 253, 254, 0.3)",
                              borderWidth: "1px",
                            }}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">Aktuell beliebt</span>
                              {activeFilters.popular && (
                                <span 
                                  className="text-xs px-2 py-0.5 rounded-full"
                                  style={{ 
                                    backgroundColor: "rgba(252, 253, 254, 0.2)",
                                    color: "#FCFDFE"
                                  }}
                                >
                                  ✓
                                </span>
                              )}
                            </div>
                            <Star className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Filter Actions */}
                    <div
                      className="flex items-center justify-between mt-4 pt-4"
                      style={{
                        borderTopColor:
                          "rgba(229, 231, 235, 0.6)",
                        borderTopWidth: "1px",
                      }}
                    >
                      <button
                        onClick={async () => {
                          console.log('🔄 Filter Reset clicked - using LOCAL cache');
                          
                          setActiveFilters({
                            seasons: [],
                            episodes: [],
                            investors: [],
                            categories: [],
                            brands: [],
                            priceRange: "all",
                            popular: false,
                          });
                          setFilterDropdowns({
                            staffel: false,
                            folge: false,
                            investor: false,
                            kategorie: false,
                            marke: false,
                            preis: false,
                          });
                          
                          // Use cached products instead of API call
                          if (allProductsCache && allProductsCache.length > 0) {
                            console.log('✅ Showing all cached products:', allProductsCache.length);
                            setFilteredProducts(allProductsCache);
                            setOriginalSearchResults(allProductsCache);
                          } else {
                            console.log('🔵 No products cached, loading all products...');
                            setIsLoading(true);
                            try {
                              await loadAllProducts();
                              if (allProductsCache && allProductsCache.length > 0) {
                                console.log('✅ Products loaded, showing all:', allProductsCache.length);
                                setFilteredProducts(allProductsCache);
                                setOriginalSearchResults(allProductsCache);
                              } else {
                                console.log('❌ Failed to load products');
                                setFilteredProducts([]);
                                setOriginalSearchResults([]);
                              }
                            } catch (error) {
                              console.error('Error loading all products:', error);
                              setFilteredProducts([]);
                              setOriginalSearchResults([]);
                            } finally {
                              setIsLoading(false);
                            }
                          }
                        }}
                        className="text-sm transition-colors"
                        style={{ color: "#9CA3AF" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color =
                            "#374151";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color =
                            "#9CA3AF";
                        }}
                      >
                        Alle Filter zurücksetzen
                      </button>

                    </div>
                  </motion.div>
                )}
              </div>

              <div className="flex-1 p-4 overflow-y-auto">
                {isLoading ? (
                  <>
                    <div className="space-y-4">
                      {/* Loading skeleton */}
                      <div className="animate-pulse">
                        <div
                          className="h-48 rounded-xl mb-4"
                          style={{
                            backgroundColor:
                              "rgba(242, 247, 248, 0.6)",
                          }}
                        ></div>
                        <div className="space-y-2">
                          <div
                            className="h-4 rounded w-3/4"
                            style={{
                              backgroundColor:
                                "rgba(242, 247, 248, 0.6)",
                            }}
                          ></div>
                          <div
                            className="h-4 rounded w-1/2"
                            style={{
                              backgroundColor:
                                "rgba(242, 247, 248, 0.6)",
                            }}
                          ></div>
                          <div
                            className="h-4 rounded w-2/3"
                            style={{
                              backgroundColor:
                                "rgba(242, 247, 248, 0.6)",
                            }}
                          ></div>
                        </div>
                      </div>

                      <div className="animate-pulse">
                        <div
                          className="h-48 rounded-xl mb-4"
                          style={{
                            backgroundColor:
                              "rgba(242, 247, 248, 0.6)",
                          }}
                        ></div>
                        <div className="space-y-2">
                          <div
                            className="h-4 rounded w-3/4"
                            style={{
                              backgroundColor:
                                "rgba(242, 247, 248, 0.6)",
                            }}
                          ></div>
                          <div
                            className="h-4 rounded w-1/2"
                            style={{
                              backgroundColor:
                                "rgba(242, 247, 248, 0.6)",
                            }}
                          ></div>
                          <div
                            className="h-4 rounded w-2/3"
                            style={{
                              backgroundColor:
                                "rgba(242, 247, 248, 0.6)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="mt-8 text-center"
                      style={{ color: "#9CA3AF" }}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                        style={{
                          backgroundColor:
                            "rgba(242, 247, 248, 0.8)",
                        }}
                      >
                        <Search className="w-6 h-6" />
                      </div>
                      <p className="text-sm">
                        Einen kurzen Moment ... wir durchstöbern gerade alle Höhle der Löwen-Produkte für dich.
                      </p>
                    </div>
                  </>
                ) : (
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="mb-4 text-sm"
                      style={{ color: "#6B7280" }}
                    >
                      {filteredProducts.length} Produkte
                      gefunden{" "}
                      {currentSearchTerm &&
                        `für "${currentSearchTerm}"`}
                    </div>

                    {isMobile || isTabletPortrait ? (
                      /* Mobile & Tablet Portrait: Card View */
                      <div className="grid gap-4 grid-cols-1">
                        {filteredProducts.map((product, index) => (
                          <motion.div
                            key={product.id}
                            className={`bg-white ${isMobile ? 'rounded-lg' : 'rounded-2xl'} shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.1,
                            }}
                            whileHover={{ scale: 1.03 }}
                          >
                              {/* Hero Image with Overlays */}
                              <div className="relative aspect-[4/3] w-full">
                                <ImageWithFallback
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                                />
                                
                                {/* Top Overlay Content */}
                                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                                  {/* Category Tag */}
                                  <div className="flex gap-2">
                                    <span 
                                      className="px-3 py-1 text-white text-xs font-medium rounded-full"
                                      style={{ backgroundColor: "#19535F" }}
                                    >
                                      {product.category}
                                    </span>
                                  </div>
                                </div>

                                {/* Pagination Dots */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                  <div className="flex gap-2">
                                    <div className="w-2 h-2 bg-white rounded-full opacity-100"></div>
                                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                                  </div>
                                </div>
                              </div>

                              {/* Content Section */}
                              <div className={`${isMobile ? 'p-3' : isTabletPortrait ? 'p-4' : 'p-5'}`}>
                                {/* Title */}
                                <div className="mb-3">
                                  <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
                                    {product.name}
                                  </h3>
                                </div>

                                {/* Season and Episode */}
                                <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                                  <span>{product.season}</span>
                                  {(product as any).episode && (
                                    <>
                                      <span>•</span>
                                      <span>{(product as any).episode}</span>
                                    </>
                                  )}
                                </div>

                                {/* Meta Information */}
                                <div className="mb-3 text-sm text-gray-500">
                                  <span className="font-medium">{formatInvestorDisplay(product.investor)}</span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                  {product.description}
                                </p>

                                {/* Price and Button */}
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <span className="text-lg font-semibold text-gray-900">
                                      {product.price} €
                                    </span>
                                    {product.originalPrice && (
                                      <span className="text-sm text-gray-400 line-through">
                                        {product.originalPrice} €
                                      </span>
                                    )}
                                  </div>
                                  
                                  <motion.button
                                    className={`px-6 py-2 text-sm font-medium rounded-full transition-colors duration-200 flex items-center gap-2 ${
                                      (product as any).product_url || (product as any).url 
                                        ? 'bg-black text-white hover:bg-gray-800 cursor-pointer' 
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                                    whileHover={(product as any).product_url || (product as any).url ? { scale: 1.05 } : {}}
                                    whileTap={(product as any).product_url || (product as any).url ? { scale: 0.95 } : {}}
                                    onClick={() => {
                                      const url = (product as any).product_url || (product as any).url;
                                      if (url) {
                                        window.open(url, '_blank');
                                      }
                                    }}
                                    disabled={!((product as any).product_url || (product as any).url)}
                                  >
                                    {(product as any).product_url || (product as any).url ? 'Jetzt kaufen' : 'Nicht verfügbar'}
                                    <ExternalLink className="w-4 h-4" />
                                  </motion.button>
                                </div>
                              </div>
                            </motion.div>
                        ))}
                      </div>
                    ) : (
                      /* Tablet Landscape & Desktop: List View */
                      <div className="space-y-4">
                        {filteredProducts.map((product, index) => (
                          <motion.div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.1,
                            }}
                            whileHover={{ scale: 1.01 }}
                          >
                            {/* Image */}
                            <div className="relative w-48 h-32 flex-shrink-0">
                              <ImageWithFallback
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                              {/* Category Tag */}
                              <div className="absolute top-2 left-2">
                                <span 
                                  className="px-2 py-1 text-white text-xs font-medium rounded-full"
                                  style={{ backgroundColor: "#19535F" }}
                                >
                                  {product.category}
                                </span>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-4 flex justify-between">
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                  {product.name}
                                </h3>
                                
                                <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                                  <span>{product.season}</span>
                                  {(product as any).episode && (
                                    <>
                                      <span>•</span>
                                      <span>{(product as any).episode}</span>
                                    </>
                                  )}
                                </div>

                                <div className="mb-2 text-sm text-gray-500">
                                  <span className="font-medium">{formatInvestorDisplay(product.investor)}</span>
                                </div>

                                <p className="text-gray-600 text-sm line-clamp-2">
                                  {product.description}
                                </p>
                              </div>

                              {/* Price and Button */}
                              <div className="flex flex-col items-end justify-between ml-4">
                                <div className="text-right">
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="text-lg font-semibold text-gray-900">
                                      {product.price} €
                                    </span>
                                    {product.originalPrice && (
                                      <span className="text-sm text-gray-400 line-through">
                                        {product.originalPrice} €
                                      </span>
                                    )}
                                  </div>
                                </div>
                                
                                <motion.button
                                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 flex items-center gap-2 ${
                                    (product as any).product_url || (product as any).url 
                                      ? 'bg-black text-white hover:bg-gray-800 cursor-pointer' 
                                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                  }`}
                                  whileHover={(product as any).product_url || (product as any).url ? { scale: 1.05 } : {}}
                                  whileTap={(product as any).product_url || (product as any).url ? { scale: 0.95 } : {}}
                                  onClick={() => {
                                    const url = (product as any).product_url || (product as any).url;
                                    if (url) {
                                      window.open(url, '_blank');
                                    }
                                  }}
                                  disabled={!((product as any).product_url || (product as any).url)}
                                >
                                  {(product as any).product_url || (product as any).url ? 'Jetzt kaufen' : 'Nicht verfügbar'}
                                  <ExternalLink className="w-4 h-4" />
                                </motion.button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {currentSearchTerm !== "Alle Produkte" && (
                        <div className="mt-6 text-center">
                          <motion.button
                            onClick={handleAllProductsClick}
                            className="px-6 py-3 rounded-xl transition-all duration-200 shadow-lg"
                            style={{
                              backgroundColor: "#100007",
                              color: "#FCFDFE",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#0A0005";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "#100007";
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Alle Produkte anzeigen
                          </motion.button>
                        </div>
                      )}
                    </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Menu Overlay */}
      {showMenu && (
        <motion.div
          className="fixed inset-0 z-[200]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowMenu(false)}
        >
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          
          {/* Menu Content */}
          <motion.div
            className="absolute right-0 top-0 h-screen w-full max-w-md shadow-2xl flex flex-col"
            style={{
              backgroundColor: "#FCFDFE",
              borderColor: "rgba(252, 253, 254, 0.2)",
              borderLeftWidth: "1px",
            }}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="p-6 flex items-center justify-between"
              style={{
                borderBottomColor: "rgba(242, 247, 248, 0.6)",
                borderBottomWidth: "1px",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8">
                  <ImageWithFallback
                    src="/DHDL_Shop_Logo.svg"
                    alt="Höhle der Löwen Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3
                  className="text-lg font-medium"
                  style={{ color: "#100007" }}
                >
                  Menü
                </h3>
              </div>
              
              <motion.button
                onClick={() => setShowMenu(false)}
                className="p-2 rounded-lg transition-colors"
                style={{
                  backgroundColor: "rgba(242, 247, 248, 0.6)",
                  color: "#6B7280",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(242, 247, 248, 0.8)";
                  e.currentTarget.style.color = "#374151";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(242, 247, 248, 0.6)";
                  e.currentTarget.style.color = "#6B7280";
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="space-y-2">
                {[
                  { name: "Unser DHDL-Blog", description: "In Kürze verfügbar", key: "Blog" },
                  { name: "FAQ", description: "Häufig gestellte Fragen", key: "FAQ" },
                  { name: "Allgemeine Geschäftsbedingungen", description: "Allgemeine Geschäftsbedingungen", key: "AGB" },
                  { name: "Datenschutzerklärung", description: "Datenschutzerklärung", key: "Datenschutz" },
                  { name: "Impressum", description: "Rechtliche Informationen", key: "Impressum" },
                ].map((item, index) => (
                  <motion.button
                    key={item.key}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${item.key === "Blog" ? "opacity-50 cursor-not-allowed" : ""}`}
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "rgba(242, 247, 248, 0.6)",
                      borderWidth: "1px",
                    }}
                    onMouseEnter={(e) => {
                      if (item.key !== "Blog") {
                        e.currentTarget.style.backgroundColor = "rgba(242, 247, 248, 0.8)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                    onClick={() => {
                      if (item.key === "Blog") {
                        // Blog is inactive - do nothing
                        return;
                      } else if (["FAQ", "AGB", "Datenschutz", "Impressum"].includes(item.key)) {
                        // Save current state before opening legal page
                        setPreviousState({
                          showSplitScreen,
                          showBlog,
                          selectedArticle,
                          currentSearchTerm,
                          filteredProducts,
                          showProductSearch,
                        });
                        setShowLegalPage(item.key);
                        setShowBlog(false);
                        setShowSplitScreen(false);
                        setShowMenu(false);
                      } else {
                        setShowMenu(false);
                      }
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4
                          className="font-medium mb-1"
                          style={{ 
                            color: "#100007",
                            opacity: item.key === "Blog" ? 0.6 : 1
                          }}
                        >
                          {item.name}
                        </h4>
                        {/* Nur für Blog den Subtitel anzeigen */}
                        {item.key === "Blog" && (
                          <p
                            className="text-sm"
                            style={{ color: "#6B7280" }}
                          >
                            {item.description}
                          </p>
                        )}
                      </div>
                      <ChevronDown
                        className="w-4 h-4 transform -rotate-90"
                        style={{ color: "#C0C5CA" }}
                      />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Kontakt Button - über der Linie */}
            <div className="px-6 pb-4 mt-auto">
              <div className="text-center">
                <motion.button
                  onClick={() => {
                    setShowContactModal(true);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200 shadow-lg"
                  style={{
                    backgroundColor: "#100007",
                    color: "#FCFDFE",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#0A0005";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#100007";
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">Kontaktiere uns</span>
                </motion.button>
              </div>
            </div>

            {/* Footer - mit Linie */}
            <div
              className="px-6 py-4"
              style={{
                borderTopColor: "rgba(242, 247, 248, 0.6)",
                borderTopWidth: "1px",
              }}
            >
              <div className="text-center">
                <p
                  className="text-sm mb-2"
                  style={{ color: "#9CA3AF" }}
                >
                  Dein Höhle der Löwen-Produktfinder
                </p>
                <p
                  className="text-xs"
                  style={{ color: "#C0C5CA" }}
                >
                  Version 1.0 • Entwickelt mit Löwen-❤️
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={() => setShowContactModal(false)}
        >
          {/* Background overlay */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowContactModal(false)}
          />
          
          {/* Modal content */}
          <motion.div
            className="relative bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 p-1 rounded-lg transition-colors hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
            
            {/* Modal header */}
            <div className="mb-4">
              <Mail className="w-10 h-10 text-[#19535F] mb-3" />
              <h3 className="text-xl font-semibold text-[#100007]">Kontaktiere uns</h3>
            </div>
            
            {/* Modal body */}
            <p className="text-gray-600 mb-4">
              Wenn du Fragen zu dem Höhle der Löwen-Produktfinder oder Feedback für uns hast, kontaktiere uns gerne via:
            </p>
            
            {/* Email display */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4 flex items-center justify-between">
              <span className="text-[#19535F] font-medium">dhdl@icompetence.de</span>
              <button
                onClick={(e) => {
                  navigator.clipboard.writeText("dhdl@icompetence.de").then(() => {
                    // Show brief copy confirmation
                    const button = e.currentTarget as HTMLButtonElement;
                    const originalText = button.textContent;
                    button.textContent = "Kopiert!";
                    button.classList.add("text-green-600");
                    setTimeout(() => {
                      button.textContent = originalText;
                      button.classList.remove("text-green-600");
                    }, 2000);
                  });
                }}
                className="text-sm text-gray-600 hover:text-[#19535F] transition-colors px-2 py-1"
              >
                Kopieren
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Permanent bottom button for mobile - only show when split screen is active and chat is closed */}
      {isMobile && showSplitScreen && !isChatOpen && (
        <motion.button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-4 right-4 z-[1001] w-14 h-14 rounded-full shadow-lg backdrop-blur-lg flex items-center justify-center"
          style={{
            backgroundColor: "#19535F",
            color: "#FCFDFE",
          }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Search className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
}