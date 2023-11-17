import type { StaticImageData } from 'next/image';

import amyBurns from "@/public/customers/amy-burns.png"
import balazsOrban from "@/public/customers/balazs-orban.png"
import delbaDeOliveira from "@/public/customers/delba-de-oliveira.png"
import emilKowalski from "@/public/customers/emil-kowalski.png"
import evilRabbit from "@/public/customers/evil-rabbit.png"
import guillermoRauch from "@/public/customers/guillermo-rauch.png"
import hectorSimpson from "@/public/customers/hector-simpson.png"
import jaredPalmer from "@/public/customers/jared-palmer.png"
import leeRobinson from "@/public/customers/lee-robinson.png"
import michaelNovotny from "@/public/customers/michael-novotny.png"
import stephDietz from "@/public/customers/steph-dietz.png"
import stevenTey from "@/public/customers/steven-tey.png"

const imagenes: Record<string, StaticImageData> = {
    '/customers/amy-burns.png': amyBurns,
    '/customers/balazs-orban.png': balazsOrban,
    '/customers/delba-de-oliveira.png': delbaDeOliveira,
    '/customers/emil-kowalski.png': emilKowalski,
    '/customers/evil-rabbit.png': evilRabbit,
    '/customers/guillermo-rauch.png': guillermoRauch,
    '/customers/hector-simpson.png': hectorSimpson,
    '/customers/jared-palmer.png': jaredPalmer,
    '/customers/lee-robinson.png': leeRobinson,
    '/customers/michael-novotny.png': michaelNovotny,
    '/customers/steph-dietz.png': stephDietz,
    '/customers/steven-tey.png': stevenTey,
  };
  export default imagenes;