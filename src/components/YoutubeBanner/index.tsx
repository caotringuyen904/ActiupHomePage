import React from 'react';
import Searchbar from '../Searchbar/index_NonBg';

const getEmbedUrl = (url: string): string => {
  let videoId: string | undefined;

  switch (true) {
    case url.includes('youtu.be/'):
      videoId = url.split('youtu.be/')[1].split('?')[0];
      break;
    case url.includes('/live/'):
      videoId = url.split('/live/')[1].split('?')[0];
      break;
    case url.includes('v='):
      videoId = url.split('v=')[1].split('&')[0];
      break;
    case url.includes('/embed/'):
      videoId = url.split('/embed/')[1].split('?')[0];
      break;
    case url.includes('list='):
      videoId = url.split('list=')[1].split('&')[0];
      return `https://www.youtube.com/embed?listType=playlist&list=${videoId}`;
    default:
      return '';
  }

  return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1` : '';
};

const YoutubeBanner: React.FC = () => {
  const url = "https://www.youtube.com/live/hpIidsScFsw?si=WNqvKZ7VvClWC7MN";
  const embedUrl = getEmbedUrl(url);

  return (
    <div className="relative flex flex-col justify-center w-full mt-15 ">
      {embedUrl ? (
        <iframe
          width="100%"
          height="600"
          src={embedUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Invalid YouTube URL</p>
      )}
            <Searchbar />
    </div>
  );
};

export default YoutubeBanner;
