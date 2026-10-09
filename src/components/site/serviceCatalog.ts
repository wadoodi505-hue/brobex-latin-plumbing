import {
  Bath,
  Droplets,
  Flame,
  Gauge,
  Search,
  ShowerHead,
  Siren,
  Utensils,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  text: string;
  intro: string;
  includes: string[];
  signs: string[];
  response: string;
};

export const SERVICES: Service[] = [
  {
    slug: "emergency-plumbing",
    icon: Siren,
    title: "Auxilium aquarum urgente",
    text: "Effluxus, obstructiones et vitia urgentia celeriter ac perite curantur.",
    intro:
      "Cum aqua quo non debet pervenit, primum res coercenda est, deinde agendum. BroBax systema tutum reddit, domum tuam protegit et solutionem ante opus explicat.",
    includes: [
      "Statim interclusio aquae vel calefactionis",
      "Tutela et reparatio fistularum ruptarum vel laesarum",
      "Aperitio obstructionum gravium et redundantium",
      "Substitutio valvularum, capsarum et nexuum vitiosorum",
      "Munditia et ordinatio ad damna minuenda ante discessum",
    ],
    signs: [
      "Aqua fluens aut vi effluens quam sistere non potes",
      "Subita imminutio vel iactura pressionis",
      "Odor cloacae aut refluxus",
      "Defectus calefactionis aut aquae calidae tempore frigoris",
    ],
    response: "Opus eodem die praelatum, cum res periculosa sit aut damnum faciat.",
  },
  {
    slug: "drain-cleaning",
    icon: Waves,
    title: "Aperitio cloacarum",
    text: "Cloacae lentae aut obstructae penitus liberantur, non tantum ad tempus.",
    intro:
      "Multae cloacae iterum obstruuntur quia sola obstructio superficialis tollitur. Totum iter liberamus et fluxum recte probamus, ne quaestio tacite redeat.",
    includes: [
      "Aperitio mechanica labrorum, lavacrorum et imbrium",
      "Munditia columnarum cloacarum et puteorum exteriorum",
      "Amotio adipis, calcis et sordium accumulatorum",
      "Probatio fluxus post aperitionem",
      "Consilia ad novas obstructiones vitandas",
    ],
    signs: [
      "Aqua lente effluens aut in labro stagnans",
      "Gargarisma post clausum faucetum",
      "Mali odores ex cloacis recurrentes",
      "Plures apparatus aut cloacae male fluentes",
    ],
    response: "Plerumque intra unum aut duos dies ordinatur, citius si refluxus accidit.",
  },
  {
    slug: "leak-detection-repair",
    icon: Search,
    title: "Investigatio et reparatio effluxuum",
    text: "Diagnosis accurata ad fontem reperiendum cum minimo incommodo.",
    intro:
      "Macula umida raro locum initii effluxus ostendit. Fontem ordine quaerimus, domum tuam quam minimum perturbantes, deinde causam veram reparamus.",
    includes: [
      "Investigatio ordinata effluxuum occultorum et sub pavimento",
      "Probationes pressionis et isolationis",
      "Accessus accuratus cum minimo opere necessario",
      "Reparatio definitiva nexuum, fistularum vel partium",
      "Nova probatio et confirmatio ante finem",
    ],
    signs: [
      "Humor, maculae aut pictura tumens sine causa manifesta",
      "Mensurator qui movetur omnibus clausis",
      "Odor formae in una tantum camera",
      "Loca calida aut frigida in pavimento",
    ],
    response: "Opus celeriter ordinatur, urgente praelatione si effluxus augetur.",
  },
  {
    slug: "water-heater-services",
    icon: Droplets,
    title: "Officia per scaldabagni",
    text: "Reparatio, cura et substitutio ad aquam calidam constantem.",
    intro:
      "Aqua calida constans esse debet. Calefactores aquae et boilers curamus, reparando aut substituendo et recta magnitudine eligendo, ut temperatura constet.",
    includes: [
      "Diagnosis vitiorum in apparatibus electricis et gas",
      "Substitutio thermostatarum, resistentiarum et valvularum",
      "Decalcificatio et cura integra",
      "Substitutio et institutio recta magnitudine",
      "Probationes securitatis et pressionis",
    ],
    signs: [
      "Aqua calida cito deficiens",
      "Temperatura varians aut tepida",
      "Murmura, ictus aut sibilus ex apparatu",
      "Humor aut rubigo ad basim",
    ],
    response:
      "Reparationes plerumque eodem die aut postero fiunt; substitutiones secundum necessitates tuas ordinantur.",
  },
  {
    slug: "boiler-heating-services",
    icon: Flame,
    title: "Caldaria et systemata calefactionis",
    text: "Systemata calefactionis ad calorem constantem et efficacem ordinata.",
    intro:
      "Vitia calefactionis saepe totius systematis sunt, non unius partis. Totum circuitum inspicimus — pressionem, circulationem et imperia — ut solutio diuturna sit.",
    includes: [
      "Investigatio et reparatio vitiorum caldarii",
      "Regulatio pressionis et circulationis systematis",
      "Aequatio et purgatio radiatorum",
      "Substitutio pumporum, valvularum et imperiorum",
      "Cura annua ordinata",
    ],
    signs: [
      "Radiatores frigidi in parte superiore aut inferiore",
      "Caldarium clausum aut pressionem amittens",
      "Fistulae sonantes aut ictus ad initium",
      "Calefactio inaequalis inter cameras",
    ],
    response: "Defectus calefactionis tempore frigoris ut opus praelatum tractatur.",
  },
  {
    slug: "pipe-repair-replacement",
    icon: Wrench,
    title: "Reparatio et substitutio fistularum",
    text: "Reparationes fistularum mundae et diuturnae, ad normam excelsam perfectae.",
    intro:
      "Fistulae pars operis sunt quam nemo videt; ideo eas summa cura perficimus — rite sustentatas, ordinate positas et pressione probatas.",
    includes: [
      "Substitutio partium fractarum, corrosarum aut laesarum",
      "Nexus ex cupro, plastica et materiis mixtis",
      "Repositio fistularum in renovationibus",
      "Isolatio contra gelu",
      "Integra probatio pressionis post opus",
    ],
    signs: [
      "Effluxus repetiti in eadem parte",
      "Aqua decolor aut corrosio manifesta",
      "Pressio constanter humilis",
      "Fistulae quae usu vibrent aut moveantur",
    ],
    response: "Opus ordinatur cum consilio, tempore et pretio antea constitutis.",
  },
  {
    slug: "bathroom-plumbing",
    icon: Bath,
    title: "Opera aquarum balnei",
    text: "Institutio et reparatio diligens pro balneis cuiusvis magnitudinis.",
    intro:
      "In balneo omnis compendiosa via apparet. Aequatio, signacula et finitiones tam magni sunt quam systema post ea; utrumque pariter curamus.",
    includes: [
      "Institutio labrorum, lavacrorum, imbrium et latrinarum",
      "Mutationes fistularum aquae et cloacae",
      "Melioratio valvularum et pressionis imbrium",
      "Signaculum et finis silicone",
      "Probatio effluxuum et cloacarum",
    ],
    signs: [
      "Pressio imbrium infirma aut varians",
      "Aqua ex basibus imbrium aut signaculis effluens",
      "Apparatus aut partes solutae vel non aequatae",
      "Renovatio aut modernizatio parata",
    ],
    response: "Reparationes celeriter ordinantur; institutiones secundum negotia tua disponuntur.",
  },
  {
    slug: "kitchen-plumbing",
    icon: Utensils,
    title: "Opera aquarum culinae",
    text: "Labra, lineae aquae et nexus instrumentorum domesticarum accurate perficiuntur.",
    intro:
      "Systema aquarum culinae post supellectilem latet; ideo accessus et ordo pars operis sunt. Instituimus et reparatamus ut omnia etiam postea facile inspiciantur.",
    includes: [
      "Institutio labrorum, faucetorum et cloacarum",
      "Nexus lavastellarum et machinarum lavandi",
      "Reparatio effluxuum sub labro",
      "Repositio cloacarum pro novis elementis",
      "Institutio filtrorum aquae et faucetorum aquae fervidae",
    ],
    signs: [
      "Bases supellectilis humidae aut tumidae",
      "Labrum lente evacuans aut mali odores persistentes",
      "Fauceta stillantia aut difficilia ad movendum",
      "Novum instrumentum domesticum coniungendum",
    ],
    response: "Opera simpliciora saepe una visitatione perficiuntur.",
  },
  {
    slug: "fixture-installation",
    icon: ShowerHead,
    title: "Institutio faucetorum et partium",
    text: "Fauceta, imbres et partes aequata, signata atque probata instituuntur.",
    intro:
      "Bonum faucetum institutionem bonam meretur. Omnia aequantur, rite signantur et in condicionibus veris probantur antequam opus perfectum habeatur.",
    includes: [
      "Institutio faucetorum, mixtorum et imbrium",
      "Institutio radiatorum et calentium linteorum",
      "Substitutio latrinarum et capsarum evacuationis",
      "Additio valvularum interclusionis ad curam faciliorem",
      "Probatio et regulatio post institutionem",
    ],
    signs: [
      "Novae partes institutionem exspectantes",
      "Partes existentes quae stillant aut haerent",
      "Fluxus insufficiens ex faucetum nuper instituto",
      "Signaculum laesum aut partes moventes",
    ],
    response: "Tempore tibi commodo ordinatur, plerumque una visitatione completum.",
  },
  {
    slug: "preventive-maintenance",
    icon: Gauge,
    title: "Cura praeventiva",
    text: "Inspectiones ordinatae ad parvas quaestiones antequam graves fiant reperiendas.",
    intro:
      "Optima reparatio aquarum est ea qua numquam indiges. Inspectio ordinata prima signa reperit dum quaestio adhuc parva est.",
    includes: [
      "Inspectio visualis integra fistularum visibilium",
      "Probationes pressionis, fluxus et evacuationis",
      "Probatio efficaciae calefactionis et aquae calidae",
      "Inspectio sigillorum, valvularum et nexuum",
      "Summarium scriptum inspectionum et prioritatum",
    ],
    signs: [
      "Systema vetus sine recenti cura documentata",
      "Aedificium locandum aut vendendum",
      "Parvi effluxus aut soni recurrentes",
      "Vis mutationes hiemales vitare",
    ],
    response: "Tempore tibi commodo ordinatur, plerumque semel in anno.",
  },
];

export function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
