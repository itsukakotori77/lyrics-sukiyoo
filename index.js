const lyrics = [
   {
      'lyrics': 'Suki yo',
      'delay': 0.13
   },
   {
      'lyrics': 'Ima anata ni omoi nosete',
      'delay': 0.42
   },
   {
      'lyrics': 'Hora sunao ni naru no Watashi',
      'delay': 0.48
   },
   {
      'lyrics': 'Kono saki motto toba ni ite mo li kana?',
      'delay': 0.678
   },
   {
      'lyrics': 'Koi to koi ga kasamette',
      'delay': 0.45
   },
   {
      'lyrics': 'Suki yo',
      'delay': 0.20
   },
]

let idx = 0

const delayLyrics = () => {
   if(idx == lyrics.length) return 
   writeMessage(lyrics[idx].lyrics, lyrics[idx].delay)
   setTimeout(delayLyrics, (lyrics[idx]?.delay * 10000))
   process.stdout.write(`\n`)
   idx++
}

const writeMessage = (string, delay) => {
   var i = 0, intervalId;
   intervalId = setInterval(() => {
      process.stdout.write(string.charAt(i++))
      if (i > string.length) 
         clearInterval(intervalId);
   }, idx != 3 ? (delay * 300) : (delay * 200));
}

delayLyrics()