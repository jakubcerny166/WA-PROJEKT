Pokemon stránka
pokemonimg

Moje stránka slouží jako informativní stránka pro pokémon nadšence.
Má moderní a jednoduchý design, který každého uchvátí.
Célá stránka je responzivní a je připravena k používání na jakýmkoliv přístroji od počítače k mobilu.
Stránka obsahuje:

Home page
Pokedex page
Search page
Login page
Register page
Home page
Obsahuje login a register tlačítka potom překrásný obrázek pokemona

Pokedex page
Obsahuje kartičky s pokemony a inforamcemi o nich uživatel si vždy muže načíst více kartiček pomocí talčítka.
Reším to tak že odešlu requesty na API, které mi posílají zpátky JSON, se kterým nadále pracuji.

Search page
Obsahuje search bar s tlačítkem uživatel napíše jmeno pokemona a on mu vyjede jako kartička.
Funguje to tak že se odesílají API requesty, které potom posílají zpátky JSON, se kterým nadále pracuji.

Login page
Obsahuje klasický login form s inputy pro jmeno a heslo nadále je tam tlačítko kterým se ověří informace zadané uživatelem.
Informace se ověřují s informacemi uloženými v databázi vše je řízeno pomocí php.

Register page
Obsahuje klasický register form s inputy pro jmeno a heslo a zopakování hesla nadále je tam tlačítko kterým se odešlou informace
jmeno a hashnuté heslo do databáze po dokončení registrace se může uživatel poté přihlásit pomocí login formu. Vše je řízeno pomocí php.

Technologie
PHP + HTML + CSS + JS
Bootstrap
jquery
Visual studio code
XAMPP Server
Instalace
stáhnete repository git clone https://github.com/cesarjakub/WA_Project_Final.git
nastavíte si xampp server
potom otevřete svuj oblíbeny webový prohlížeč a do horní lišty napište localhost/WA_Project_Final
Chybí
local storage -> nepřišlo mi vhodné implementovat na stránku
logování chybného přihlášení 3x
