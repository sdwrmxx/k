/* ---------- Word list (for "Words" and {word} template tokens) ---------- */
const WORD_LIST = [
    "abbeys","abductee","abnormal","abrogate","absence","abut","accessed","accorded","accrue","aches","acolyte",
    "adherent","adieu","adjuring","ado","adoring","adverse","aegis","affairs","afraid","after","agates","agilely",
    "agitate","airmail","airmen","airship","alarming","alga","alluvial","allying","amaranth","ambushes",
    "amputate","analyzed","anapests","angled","angoras","anneal","anon","anthill","antique","anvil","aplenty",
    "aprons","arcade","archest","archives","argot","argues","argyles","arouses","arraign","arrows","arsonist",
    "artifact","ascends","asleep","asthma","atoms","auctions","auguries","aureola","aureolas","average",
    "aversion","avian","aviation","awaited","awaits","aweigh","awing","awkward","axons","baa","backache",
    "badgered","bag","bait","bakes","bald","baldly","banal","bangs","banquet","barbaric","barbered","barberry",
    "barfing","baritone","barnacle","barren","basalt","bashful","basilica","bathers","bearded","bedsides",
    "beechnut","beers","befogged","befouls","begonias","begrudge","behavior","behest","beige","belays","belief",
    "belting","beltways","benumbs","beret","berths","besought","beta","bethinks","betided","betwixt","beveled",
    "bides","biding","biffs","billeted","billings","bimboes","binging","binned","bitingly","bitterly","bivalves",
    "blabbing","blacked","blackout","blandest","blarneys","blaster","blessing","blight","blights","blinder",
    "blinding","bling","blitzed","blobbed","bloggers","bludgeon","blurts","blusher","bodegas","boggling",
    "bombards","bones","bonfires","bongo","bonsai","bonuses","bony","boo","boogie","booing","boor","bootees",
    "booths","bootleg","booziest","bosh","bossier","botches","bother","bottled","boudoir","bowlder","boycotts",
    "brainier","brains","brandies","bratty","breadths","brethren","bribe","bribing","bringing","brings",
    "bristled","broadest","brooches","browser","bruisers","bruskest","buckets","budgies","bugaboo","bugged",
    "builders","bulked","bulking","bullies","bullring","bunking","bur","bureau","bureaus","burnout","burs",
    "bursts","bushmen","busied","butchery","butting","bywords","cacao","caddy","cadenza","cadre","caginess",
    "callow","calmed","calve","camber","camel","camping","cancers","candor","canine","cankers","cannot",
    "canopies","cantons","capacity","capitals","capitols","capsule","captor","caribou","carnage","carom","carped",
    "carvings","cassavas","castled","casually","catboats","caterer","catering","cats","cattily","caulked",
    "caulks","causes","causing","cede","cell","cellars","cenotaph","censor","censured","census","chad","chalet",
    "chanced","changed","chapels","charging","chased","chasuble","cheeked","cheeped","cheer","cheerily","cheese",
    "cheesier","cheetahs","cherries","chid","children","chili","chilly","chimney","chinks","chips","choicer",
    "choir","chooses","chop","chopper","chortles","chorused","chowder","churn","civilize","clacking","clang",
    "clashed","clasping","classy","cleaned","cleanups","cleaving","cleft","climaxed","clipped","clipt","clobber",
    "clouding","cloyed","clubbed","cobbling","cocoas","cocoons","coded","codeine","codgers","cogitate","coiffed",
    "coiffing","coiling","coldly","coleslaw","coliseum","colonels","combats","comes","comics","coming","comm",
    "commends","comments","commit","compact","comrade","concept","conduced","confirm","consular","cont",
    "contacts","contends","continue","contuses","convened","coolie","copings","copped","cored","corked",
    "cornball","corneal","cornice","corps","corsairs","cosigns","costing","cot","coterie","coteries","counties",
    "coupled","cowards","cowling","coyote","cozier","crack","cracked","cranking","crape","crapping","creamery",
    "crevices","cries","crises","critique","crockery","crofts","crossbar","crowbar","crows","cruises","crumbled",
    "crumpets","crunchy","crusades","cuckoos","cuds","cueing","culture","cultures","cupcakes","cupfuls","curry",
    "curs","curtsey","curving","cussing","cutlet","dabbler","dam","damage","damnably","dampers","dancer","dander",
    "dankness","dapperer","daring","daringly","darneder","dashed","dauber","daubers","davits","dawdles","daze",
    "deader","deafer","debases","decayed","deceased","decimals","decoy","deduced","deepness","definite","deftest",
    "defusing","delimits","deluxe","delves","demijohn","demising","denials","denier","dent","denting","depicted",
    "deplore","descends","despoil","destroys","detain","deterred","detested","detoxify","devilish","devoid",
    "dharma","diagrams","diapered","diaries","diarist","diarrhea","dickey","dictum","diffused","digitize",
    "dilate","dills","dinged","dingiest","dinosaur","dipped","dire","dirges","disco","disdain","disguise",
    "displace","disports","disposes","disrobes","disrupts","distorts","dittoing","divide","diviner","divisor",
    "dodo","doers","doggedly","doilies","dolloped","dolorous","donut","dosages","doses","dossier","dowager",
    "downers","dowries","dozens","dpi","draftee","drag","dragging","dragoons","drawers","dream","dreamers",
    "dreamily","dressy","driblet","droids","drone","droopier","drowned","drummers","dry","dryness","due","dulled",
    "dumps","durable","duskier","dustpans","dwarf","dyed","dying","earfuls","earlobes","earthen","earthly",
    "edamame","editing","effects","efficacy","elated","electing","election","elegant","element","elision","ells",
    "emaciate","embezzle","emblems","embolden","embroils","emetics","ems","enchant","encircle","encoded",
    "endorser","enemata","engorges","enjoy","enmities","enquires","enrage","enrages","enrolls","ensconce",
    "ensnares","entered","entries","envelops","envies","envy","epicure","epidemic","epitaph","epitome","epsilon",
    "erasers","erasing","erecting","espied","etc","euphony","euros","evener","ever","everyday","eviction",
    "eviler","evolve","example","exciting","exclaims","excused","exerts","exhaled","exhales","exiled","expands",
    "exploits","extrude","extrudes","eyeliner","eyeteeth","faceless","fact","faculty","fake","falls","faradize",
    "fared","fares","fascists","fasten","fathoms","faulty","fearful","fears","feckless","fencer","ferrets",
    "fetiches","field","fifteen","filigree","finality","finance","fire","fishier","fishy","fixers","flabbier",
    "flak","flamers","flamings","flap","flashest","flaw","flawed","flayed","fleet","fleshier","flew","flexing",
    "flicking","fling","flops","floridly","flutter","fluxing","fog","foggier","folly","fondly","food","fooled",
    "footwear","fore","forefeet","forename","foreseen","foretell","forgives","fourteen","franks","freebee",
    "freezer","frieze","fringe","frisks","frizzing","froth","fry","fuddles","fumigate","funner","fuzz","fuzzball",
    "fuzzily","gabbling","gabled","gadded","gaffs","gain","gal","galling","gallons","games","gamey","ganged",
    "gangway","garaging","garb","garish","garoted","gashes","gaskets","gauzy","gawkier","gazpacho","geek",
    "getting","gigabyte","gilded","gird","glacial","glassier","glaze","glean","gleeful","glibbest","glimmers",
    "glinting","glints","glitters","gloating","glossy","gnarled","gnawed","goaded","godchild","goldener","gotta",
    "gouge","governs","grabber","grades","grafters","graphs","grief","grimes","grimy","grinders","grizzly",
    "grumpily","guide","guilds","gulp","gumming","gunmen","gunners","gurgled","gutless","gutting","gyms","gyp",
    "had","haggle","hairpins","halt","haltered","hammed","hammered","handball","handcar","handmaid","hangs",
    "hanks","hanky","harangue","hardiest","hardtack","harking","harrows","hats","hawked","haymow","headers",
    "headsets","heap","hearkens","hearth","heathen","heaved","heck","hefty","heisting","heliport","helix",
    "helpers","heptagon","herded","herder","herding","hexes","hieing","hijacked","hitch","hitched","hitches",
    "hoarders","hoarser","hoax","hobbled","hoists","holdings","holds","holdup","homebody","homier","hooking",
    "hookworm","hoop","hoped","horse","hosteler","hostelry","hostlers","huddle","huddled","hulking","humors",
    "hunger","hurtle","hurtles","hustles","hyacinth","hybrid","hydrogen","hysteric","ibis","iciness","idealist",
    "idols","ignition","ignobly","ignores","imagery","imitated","immunity","impale","imparted","impels",
    "impended","impetigo","import","impurely","inbox","inced","incite","incline","index","indicted","indorsed",
    "inductee","infant","infects","inferior","infernal","infield","infuse","inherit","injure","inkiest",
    "inkwells","inlaid","innings","inroad","insight","insomnia","instill","insuring","intern","interval","intuit",
    "invasive","inverted","invites","invoking","ionize","ions","isles","ism","isobar","isobars","jabbed","jamb",
    "jargon","jaundice","jell","jellied","jerkier","jetted","jewelled","jeweller","jibing","jiggered","jigging",
    "jigs","jinns","joggers","joke","joking","jonquil","jotting","jounces","joying","judges","judgment",
    "judicial","julienne","juncoes","juncos","justly","kaolin","karma","kayaking","keyholes","kicked","kidnap",
    "kinetic","kingship","kith","kludged","kneed","kneeled","knights","knock","kooks","kumquats","lager","lams",
    "larder","largesse","lasing","lass","latex","laudably","launder","lavishes","lawyers","lazy","leaning",
    "lechers","leering","leeway","left","leftie","leftism","lefty","leg","legato","leggings","leggy","legrooms",
    "lemming","lemur","lenders","lengthy","leniency","lewdest","lexical","lexicon","liars","lib","libeler",
    "liberals","lichen","licit","lien","likeness","liner","linnet","lints","literate","littler","llano","loading",
    "loaves","lobe","local","locavore","loco","locust","lodged","logbook","loges","logging","logoff","logon",
    "loonie","loopier","looping","loosely","loosens","loot","lore","lorn","lovingly","loyalest","loyalist",
    "lucidity","lug","lung","lunged","lustily","lutes","lyceums","lychees","lymphoma","macadam","macaws","maced",
    "maces","machismo","madden","maddest","madrasa","maharaja","mahjong","maid","mandates","mangy","manhole",
    "manuring","mappings","marabou","marauder","margins","marmoset","marrow","marshal","martini","mascot",
    "massages","masseur","mast","mat","material","matrons","mattock","mattocks","mausolea","mavins","mealiest",
    "mealy","means","meatier","medal","mediator","medium","meg","megs","melded","memoir","memoirs","menses",
    "merest","mergers","merges","meringue","mermen","mete","methadon","meting","midst","midterm","mildew",
    "military","minibike","minions","minivans","minnow","minuet","miscalls","misogyny","misrule","misruled",
    "missed","missile","missives","mists","misty","mitered","mitosis","mobbed","modems","molder","molding","mono",
    "monogamy","monologs","monotony","monsoon","moorland","mooted","moppet","moraines","morn","morpheme",
    "morrows","mosey","motored","mottoes","mourns","moussed","mousy","mower","mucked","muckier","mucky","muddier",
    "muffin","muggle","murkiest","murks","muses","mush","musings","mutt","muzzling","name","napkins","narc",
    "narrator","navels","nays","neared","needs","neglects","neighs","nerve","nerving","nest","nettling","neuters",
    "new","nib","niceness","niceties","nicking","nickle","nigh","nimbler","nimbuses","nix","noble","nodes",
    "nonempty","nonhuman","nonrigid","nonskid","noodle","nosed","notes","notices","noticing","noting","noun",
    "noway","nuclear","nudged","nuke","nutted","nuzzled","nybble","obesity","obeyed","obligate","obscurer",
    "obverse","obverses","occurred","offer","often","ohms","oldest","omen","onetime","onrushes","opts","oral",
    "orals","orc","ordinals","orient","origins","ornament","ornate","otter","outdid","outdoor","outlaid",
    "outlined","outruns","outsider","outsmart","ovations","overbook","overcame","overdose","overtime","owns",
    "oxidized","pad","paddled","pailsful","pain","painful","pains","pair","palace","paler","palimony","panier",
    "paniers","panniers","panted","papering","paprika","parade","parapet","parcel","parching","parishes",
    "parking","parsnips","partake","partisan","pass","passbook","pastoral","pastors","pate","patent","pathos",
    "pathways","payment","peaks","pearled","peasant","peddling","peeling","peers","peeve","pelican","pelves",
    "pends","pent","people","perfidy","perish","perkier","perms","persuade","pertness","perusal","peskier",
    "pests","petted","pettily","phantasm","phantasy","pharaohs","phasing","phoneme","phonies","physics",
    "pickling","piggies","pile","pimp","pinged","pinker","pipit","pirates","pitchmen","pitfalls","pitons","pixel",
    "pizzazz","plagued","planets","playboy","playroom","plexuses","plugs","plummet","pluses","poaches","pocketed",
    "podia","poetic","pointer","polka","polled","polliwog","pommeled","pompous","ponds","poniards","pooch","pope",
    "popes","populace","porous","portable","posses","possums","potbelly","pothooks","potion","pounds","praises",
    "presaged","preside","price","prim","primmest","printers","prithee","private","prodded","proofs","propound",
    "propped","proverb","provisos","prowled","prowling","prows","prune","pruning","pseudo","pshaws","pucker",
    "pudding","puddling","pugilist","pulped","punctual","punt","punts","pureeing","purifies","purism","pushcart",
    "pushy","pussiest","putative","quake","quarto","quartos","quavers","quavery","quell","quest","quickly",
    "quilted","quintet","quirkier","quirking","quitter","quoited","rabbles","racquets","radiate","raft","rafter",
    "raided","raiding","rainbow","raja","rams","ransomed","rapidest","rarefied","rarest","rasher","raster","rats",
    "ratted","raveling","razzes","reaching","ready","rebates","recanted","recap","receded","recites","redrafts",
    "reeks","reel","reenact","reenlist","reenter","refiles","reflect","refresh","refugee","refusals","refute",
    "refuted","regaling","rehabs","rehi","reins","rejected","related","released","remark","remodel","remount",
    "remove","rentals","rented","repast","repeats","replying","reprise","reprove","reroute","resorts","respect",
    "response","restore","restroom","retails","retakes","retool","revering","reviled","rewire","rhymes","ricks",
    "rickshas","rioted","riveted","roadster","rock","rockier","roll","rolled","roommate","rosebush","rosily",
    "rosined","rosiness","round","rousing","rowdiest","roweled","rubbish","rube","ruffing","rugby","rugged",
    "rugs","rumba","rumored","rumoring","rune","ruses","rustle","rustler","sachem","sadists","sadly","safer",
    "saga","sages","sago","sailor","saki","salesman","sally","sampled","sancta","sandals","sappier","satanism",
    "saucepan","sauna","saunters","sausages","sawdust","scad","scags","scams","scan","scansion","scapula",
    "scapulas","scar","scavenge","scepter","schooner","scolding","scoop","scopes","scorched","score","scornful",
    "scouting","screwy","scruple","sculpted","scythed","scythes","scything","seabird","sealskin","seats",
    "seaweed","section","sedans","seen","segue","seismic","semantic","sense","sepal","seraphs","sere","serenade",
    "serener","servings","servo","setbacks","settled","settling","severe","sewerage","sextons","shammy","shaped",
    "sharks","sheathe","shed","sheets","shekels","shelling","shied","shimmers","shimmery","shines","shining",
    "shirk","shoals","shops","shotgun","should","showboat","shrewder","shrinks","shriven","shrubby","shticks",
    "shuffle","shunts","sibyls","side","sideshow","signals","signed","silicons","simplex","sinew","sinner",
    "sinning","sixths","sixties","skiers","skiffs","skimp","skins","skivvies","skull","skunk","slackest","slake",
    "slaked","slams","slanting","slaving","slay","slayers","sleds","sleep","sleighed","slim","slimy","slogged",
    "sluice","slush","smeared","smelting","smiley","smolders","smoothed","smote","smug","smuggled","snack",
    "snagging","snaking","snarkier","sneakier","sniping","snivel","snobbier","snorer","snorers","snorkels",
    "soapsuds","sobs","sockets","sodium","softened","solaria","solely","solicits","soloists","solvers","sop",
    "sophists","sopping","sorely","sorrels","sorrow","sorrowed","sorties","soulful","sounds","south","southpaw",
    "spa","spacy","spam","spanking","spanner","sparkler","spawning","specked","spiced","spikiest","spine","spiny",
    "spiraea","spittoon","spooky","spoonful","spotless","spots","sprawl","sprawled","spring","sprints","spryer",
    "spuming","spurred","spurt","sputum","squarely","squats","squatted","squeezer","squirts","stadium","staffers",
    "stairs","staking","staler","starving","state","stater","stats","statuary","statures","status","statuses",
    "steady","steeling","stems","stench","stent","stepdad","stepsons","stereos","stickier","sticks","stitches",
    "stoking","stolid","stomped","stoned","stoning","stoop","stooped","storming","strained","strategy","stricter",
    "strident","strokes","strophe","strudel","strumpet","strums","student","stuffier","stymie","subhead",
    "submerge","submerse","suborn","subsoil","suburbia","suckled","suctions","sultry","sums","sunder","sundries",
    "sunken","sunlamp","sunned","sunset","sup","superber","suppler","supposes","surgery","surly","sutured","swam",
    "swankest","swatches","swath","sweets","swelled","swigged","swinish","swishing","swiveled","swoon","sycamore",
    "sylphs","synonym","syphon","syrupy","tabby","taboo","tabued","taciturn","tacklers","take","takes","tamers",
    "tamps","tanager","tangled","tanner","tapered","tapeworm","taproot","tared","taros","tasks","tattle","tattoo",
    "tautness","taxied","tea","teapots","teargas","techno","teems","tellers","tempered","tendered","tenons",
    "tepee","termini","terrain","terrific","terry","testify","tetanus","theists","thief","thimble","thous",
    "thrive","thrower","thumb","tibia","ticks","tied","time","timed","timeline","timezone","tinge","tingling",
    "tipsy","tiresome","tiring","tiro","toastier","toenail","toffee","ton","tonsils","toothed","topped","topple",
    "topples","torque","tortures","totemic","touched","tousle","touted","trace","tracery","traders","trammels",
    "treacle","triads","tricked","tricky","trifecta","trifling","trim","trimmers","trivet","trooped","troops",
    "tropical","trucks","trussing","tubercle","tuberous","tuckered","tugboats","tumults","tunics","tuns",
    "turbots","turncoat","turtles","tussocks","twelfths","twiggier","twinged","twirled","twisters","tyros",
    "ultras","ululated","ump","unbars","unborn","unbound","uncoiled","uncoils","uncork","unfits","unhinge",
    "unhinges","union","uniting","unmade","unman","unmanned","unmoral","unquoted","unready","untoward","untruer",
    "unvoiced","unwanted","unwell","unzipped","upbeats","upbraid","upcoming","updraft","upped","uproots",
    "upsurge","uptown","urea","urn","used","using","uterine","vacuum","valuing","vandal","vats","velvety",
    "vendor","vengeful","versify","vetch","vetted","vibes","vicious","victual","victuals","vie","viewed",
    "villain","virgules","vitality","vivas","viz","vogue","voids","volumes","voter","vowels","voyaged","wackest",
    "wacko","wagging","wanders","wapitis","warrant","warships","warthogs","watchmen","wax","waxing","ways",
    "weaken","wearable","weediest","weeds","weenies","wefts","weights","weir","welds","welshes","wetback",
    "wharfs","wheeled","wheezier","whetted","whirrs","whiskys","whits","widget","width","wields","wife","wights",
    "wigwams","wildfire","wilds","wile","wiles","wingtips","winsome","wipe","wiper","wisher","withdrew","witness",
    "woeful","wolfed","wolfing","woolens","worm","worriers","worsted","worsting","worthies","wraith","wrapper",
    "wrecked","wrinkles","wrist","writers","xenon","xiv","xxvi","xxxv","yanking","yawing","yawned","yeah","year",
    "yearbook","yelped","yeshivot","yields","yippee","yipping","yokel","yuck","zingers","zings","zonal","zone"
];

/* ---------- Character sets ---------- */
const CHARSETS = {
    l: 'abcdefghijklmnopqrstuvwxyz',
    u: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    d: '0123456789',
    s: '!@#$%^&*()_+[]{}|;:,.<>?/`~'
};
const AMBIGUOUS_CHARS = 'il1LoO0';

/* ---------- Utilities ---------- */
function getRandomInt(max) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % max;
}
function randomChar(set) {
    return set[getRandomInt(set.length)];
}
function randomWord() {
    return WORD_LIST[getRandomInt(WORD_LIST.length)];
}
function capitalizeWord(w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
}
function stripAmbiguous(set) {
    let out = '';
    for (const ch of set) {
        if (!AMBIGUOUS_CHARS.includes(ch)) out += ch;
    }
    return out;
}
function bitsFor(choices) {
    return choices > 1 ? Math.log2(choices) : 0;
}

/* ============================================================
   Mode: Characters
   ============================================================ */
const lengthRange = document.getElementById('lengthRange');
const lengthNumber = document.getElementById('lengthNumber');
const lengthValue = document.getElementById('lengthValue');
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const specialCheckbox = document.getElementById('special');
const customCheck = document.getElementById('customCheck');
const customCharsInput = document.getElementById('customChars');
const excludeAmbiguous = document.getElementById('excludeAmbiguous');

function generateCharactersPassword() {
    let charSet = '';
    if (lowercaseCheckbox.checked) charSet += CHARSETS.l;
    if (uppercaseCheckbox.checked) charSet += CHARSETS.u;
    if (numbersCheckbox.checked) charSet += CHARSETS.d;
    if (specialCheckbox.checked) charSet += CHARSETS.s;
    if (customCheck.checked && customCharsInput.value) charSet += customCharsInput.value;

    if (excludeAmbiguous.checked) charSet = stripAmbiguous(charSet);

    // de-duplicate while preserving order
    charSet = [...new Set(charSet.split(''))].join('');

    const length = Math.min(Math.max(parseInt(lengthNumber.value) || 16, 1), 1000);

    if (!charSet) {
        return { text: '', bits: 0, error: 'Select at least one character set.' };
    }

    let text = '';
    for (let i = 0; i < length; i++) text += randomChar(charSet);
    const bits = length * bitsFor(charSet.length);
    return { text, bits };
}

/* ============================================================
   Mode: Words (passphrase)
   ============================================================ */
const wordCountRange = document.getElementById('wordCountRange');
const wordCountValue = document.getElementById('wordCountValue');
const separatorSelect = document.getElementById('separatorSelect');
const customSeparator = document.getElementById('customSeparator');
const capitalizationSelect = document.getElementById('capitalizationSelect');
const wordsAddNumber = document.getElementById('wordsAddNumber');
const wordsAddSpecial = document.getElementById('wordsAddSpecial');

function currentSeparator() {
    return separatorSelect.value === 'custom' ? customSeparator.value : separatorSelect.value;
}

function applyCapitalization(word, mode) {
    switch (mode) {
        case 'upper': return word.toUpperCase();
        case 'random': {
            const r = getRandomInt(3);
            if (r === 0) return word;
            if (r === 1) return capitalizeWord(word);
            return word.toUpperCase();
        }
        case 'first': return capitalizeWord(word);
        default: return word;
    }
}

function generateWordsPassword() {
    const count = parseInt(wordCountRange.value) || 4;
    const capMode = capitalizationSelect.value;
    const sep = currentSeparator();

    const words = [];
    let bits = count * bitsFor(WORD_LIST.length);
    for (let i = 0; i < count; i++) {
        let word = randomWord();
        word = applyCapitalization(word, capMode);
        if (capMode === 'random') bits += bitsFor(3);
        words.push(word);
    }

    let text = words.join(sep);

    if (wordsAddNumber.checked) {
        const n = getRandomInt(100);
        text += sep + String(n).padStart(2, '0');
        bits += bitsFor(100);
    }
    if (wordsAddSpecial.checked) {
        const ch = randomChar(CHARSETS.s);
        text += ch;
        bits += bitsFor(CHARSETS.s.length);
    }

    return { text, bits };
}

/* ============================================================
   Mode: Template
   ============================================================ */
const templateInput = document.getElementById('templateInput');
const templateWarning = document.getElementById('templateWarning');

function expandToken(token) {
    if (token === 'word') return { text: randomWord(), bits: bitsFor(WORD_LIST.length) };
    if (token === 'Word') return { text: capitalizeWord(randomWord()), bits: bitsFor(WORD_LIST.length) };
    if (token === 'WORD') return { text: randomWord().toUpperCase(), bits: bitsFor(WORD_LIST.length) };

    if (/^[ludsLUDS]+$/.test(token)) {
        const chars = token.split('');
        const uniform = chars.every(c => c.toLowerCase() === chars[0].toLowerCase());
        if (uniform) {
            const set = CHARSETS[chars[0].toLowerCase()];
            if (set) {
                let text = '';
                let bits = 0;
                for (let i = 0; i < chars.length; i++) {
                    text += randomChar(set);
                    bits += bitsFor(set.length);
                }
                return { text, bits };
            }
        }
    }
    // Unrecognized token: surfaced as a warning, kept literal so it's easy to spot & fix.
    return { text: '{' + token + '}', bits: 0, unknown: token };
}

function generateTemplatePassword() {
    const template = templateInput.value;
    if (!template) return { text: '', bits: 0, error: 'Enter a pattern.' };

    let text = '';
    let bits = 0;
    let unknownTokens = [];
    let i = 0;
    while (i < template.length) {
        if (template[i] === '{') {
            const end = template.indexOf('}', i);
            if (end === -1) {
                text += template.slice(i);
                break;
            }
            const token = template.slice(i + 1, end);
            const result = expandToken(token);
            text += result.text;
            bits += result.bits;
            if (result.unknown) unknownTokens.push(result.unknown);
            i = end + 1;
        } else {
            text += template[i];
            i++;
        }
    }

    return {
        text,
        bits,
        warning: unknownTokens.length
            ? `Unknown token(s): ${unknownTokens.map(t => '{' + t + '}').join(', ')}`
            : null
    };
}

/* ============================================================
   Mode switching + shared UI
   ============================================================ */
const modeTabs = document.querySelectorAll('.mode-tab');
const panels = document.querySelectorAll('.panel');
const passwordDiv = document.getElementById('password');
const strengthBadge = document.getElementById('strengthLabel');
const strengthFill = document.getElementById('strengthFill');
const entropyLabel = document.getElementById('entropyLabel');
const copyButton = document.getElementById('copyButton');
const refreshButton = document.getElementById('refreshButton');

let currentMode = 'characters';

function setMode(mode) {
    currentMode = mode;
    modeTabs.forEach(tab => {
        const active = tab.dataset.mode === mode;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', String(active));
    });
    panels.forEach(panel => {
        panel.classList.toggle('hidden', panel.dataset.panel !== mode);
    });
    saveSettings();
    generatePassword();
}

function strengthFromBits(bits) {
    if (bits < 30) return { label: 'Weak', tier: 'weak' };
    if (bits < 45) return { label: 'Fair', tier: 'fair' };
    if (bits < 70) return { label: 'Strong', tier: 'strong' };
    return { label: 'Very strong', tier: 'very-strong' };
}

function generatePassword() {
    let result;
    if (currentMode === 'words') result = generateWordsPassword();
    else if (currentMode === 'template') result = generateTemplatePassword();
    else result = generateCharactersPassword();

    if (result.error) {
        passwordDiv.textContent = result.error;
        passwordDiv.classList.add('is-error');
        strengthBadge.textContent = '—';
        strengthBadge.className = 'strength-badge';
        strengthFill.style.width = '0%';
        entropyLabel.textContent = '';
    } else {
        passwordDiv.textContent = result.text;
        passwordDiv.classList.remove('is-error');
        const { label, tier } = strengthFromBits(result.bits);
        strengthBadge.textContent = label;
        strengthBadge.className = 'strength-badge tier-' + tier;
        strengthFill.className = 'strength-fill tier-' + tier;
        strengthFill.style.width = Math.min(100, (result.bits / 90) * 100) + '%';
        entropyLabel.textContent = `≈ ${Math.round(result.bits)} bits of entropy`;
    }

    if (templateWarning) {
        templateWarning.textContent = result.warning || '';
        templateWarning.classList.toggle('hidden', !result.warning);
    }
}

/* ---------- Settings persistence (preferences only, never the password) ---------- */
const STORAGE_KEY = 'pgen.settings.v1';

function saveSettings() {
    try {
        const settings = {
            mode: currentMode,
            length: lengthNumber.value,
            lowercase: lowercaseCheckbox.checked,
            uppercase: uppercaseCheckbox.checked,
            numbers: numbersCheckbox.checked,
            special: specialCheckbox.checked,
            customCheck: customCheck.checked,
            customChars: customCharsInput.value,
            excludeAmbiguous: excludeAmbiguous.checked,
            wordCount: wordCountRange.value,
            separator: separatorSelect.value,
            customSeparator: customSeparator.value,
            capitalization: capitalizationSelect.value,
            wordsAddNumber: wordsAddNumber.checked,
            wordsAddSpecial: wordsAddSpecial.checked,
            template: templateInput.value
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
        /* localStorage unavailable (private mode, etc.) — safe to ignore */
    }
}

function loadSettings() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const s = JSON.parse(raw);
        if (s.length !== undefined) { lengthRange.value = s.length; lengthNumber.value = s.length; }
        if (s.lowercase !== undefined) lowercaseCheckbox.checked = s.lowercase;
        if (s.uppercase !== undefined) uppercaseCheckbox.checked = s.uppercase;
        if (s.numbers !== undefined) numbersCheckbox.checked = s.numbers;
        if (s.special !== undefined) specialCheckbox.checked = s.special;
        if (s.customCheck !== undefined) { customCheck.checked = s.customCheck; customCharsInput.disabled = !s.customCheck; }
        if (s.customChars !== undefined) customCharsInput.value = s.customChars;
        if (s.excludeAmbiguous !== undefined) excludeAmbiguous.checked = s.excludeAmbiguous;
        if (s.wordCount !== undefined) wordCountRange.value = s.wordCount;
        if (s.separator !== undefined) {
            separatorSelect.value = s.separator;
            customSeparator.classList.toggle('hidden', s.separator !== 'custom');
        }
        if (s.customSeparator !== undefined) customSeparator.value = s.customSeparator;
        if (s.capitalization !== undefined) capitalizationSelect.value = s.capitalization;
        if (s.wordsAddNumber !== undefined) wordsAddNumber.checked = s.wordsAddNumber;
        if (s.wordsAddSpecial !== undefined) wordsAddSpecial.checked = s.wordsAddSpecial;
        if (s.template !== undefined) templateInput.value = s.template;
        if (s.mode) currentMode = s.mode;
    } catch (e) {
        /* ignore malformed/unavailable storage */
    }
}

/* ---------- Wire up events ---------- */
modeTabs.forEach(tab => tab.addEventListener('click', () => setMode(tab.dataset.mode)));

lengthRange.addEventListener('input', () => {
    lengthNumber.value = lengthRange.value;
    lengthValue.textContent = lengthRange.value;
    saveSettings();
    generatePassword();
});
lengthNumber.addEventListener('input', () => {
    lengthRange.value = lengthNumber.value;
    lengthValue.textContent = lengthNumber.value;
    saveSettings();
    generatePassword();
});

[lowercaseCheckbox, uppercaseCheckbox, numbersCheckbox, specialCheckbox, excludeAmbiguous].forEach(el =>
    el.addEventListener('change', () => { saveSettings(); generatePassword(); })
);
customCheck.addEventListener('change', () => {
    customCharsInput.disabled = !customCheck.checked;
    saveSettings();
    generatePassword();
});
customCharsInput.addEventListener('input', () => { saveSettings(); generatePassword(); });

wordCountRange.addEventListener('input', () => {
    wordCountValue.textContent = wordCountRange.value;
    saveSettings();
    generatePassword();
});
separatorSelect.addEventListener('change', () => {
    customSeparator.classList.toggle('hidden', separatorSelect.value !== 'custom');
    saveSettings();
    generatePassword();
});
customSeparator.addEventListener('input', () => { saveSettings(); generatePassword(); });
capitalizationSelect.addEventListener('change', () => { saveSettings(); generatePassword(); });
[wordsAddNumber, wordsAddSpecial].forEach(el =>
    el.addEventListener('change', () => { saveSettings(); generatePassword(); })
);

templateInput.addEventListener('input', () => { saveSettings(); generatePassword(); });
document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
        templateInput.value = chip.dataset.template;
        saveSettings();
        generatePassword();
    });
});

refreshButton.addEventListener('click', generatePassword);

copyButton.addEventListener('click', () => {
    const password = passwordDiv.textContent;
    if (!password || passwordDiv.classList.contains('is-error')) return;

    navigator.clipboard.writeText(password)
        .then(() => {
            copyButton.textContent = 'Copied';
            copyButton.classList.add('is-copied');
            setTimeout(() => {
                copyButton.textContent = 'Copy';
                copyButton.classList.remove('is-copied');
            }, 1600);
        })
        .catch(err => console.error('Error while copying:', err));
});

/* ---------- Init ---------- */
loadSettings();
lengthValue.textContent = lengthRange.value;
wordCountValue.textContent = wordCountRange.value;
setMode(currentMode);
