import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, ContentAreaContainerItem, ContentAreaContainerTitle, ContentAreaContainerDescription, WatchButton } from './styles';

interface IBannerMain {
  videoTitle: string;
  videoDescription: string;
  url: string;
}
function getYouTubeId(youtubeURL: string) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain({
  videoTitle,
  videoDescription,
  url,
}: IBannerMain) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainerItem>
          <ContentAreaContainerTitle>
            {videoTitle}
          </ContentAreaContainerTitle>

          <ContentAreaContainerDescription>
            {videoDescription}
          </ContentAreaContainerDescription>
        </ContentAreaContainerItem>

        <ContentAreaContainerItem>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
          <WatchButton>
            Assistir
          </WatchButton>
        </ContentAreaContainerItem>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
