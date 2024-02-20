import ytdl from 'ytdl-core';

export default defineEventHandler(async (event) => {
  const { url } = await readBody(event);

  if (!url) return { msg: 'Error occur' };

  console.log('body', url);

  const info = await ytdl.getInfo(url);
  const audioFormat = ytdl.chooseFormat(info.formats, {
    quality: 'highestaudio',
    filter: 'audioonly',
  });

  const urlAudio = audioFormat.url;
  const title = info.videoDetails.title;
  const thumbnail = info.videoDetails.thumbnails[0].url;

  return { title, url: urlAudio, thumbnail };
});
