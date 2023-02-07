import { Injectable } from '@nestjs/common';
import { Episode } from './entities/episode.entity';
import { Podcast } from './entities/podcast.entity';

@Injectable()
export class PodcastsService {
  private podcasts: Podcast[] = [
    {
      id: 1,
      title: '월요일',
      category: '날씨',
      rating: 2,
      episodes: [
        {
          id: 1,
          title: '맑음',
        },
      ],
    },
    {
      id: 2,
      title: '화요일',
      category: '날씨',
      rating: 7,
      episodes: [
        {
          id: 1,
          title: '비',
        },
      ],
    },
    {
      id: 3,
      title: '수요일',
      category: '날씨',
      rating: 4,
      episodes: [
        {
          id: 1,
          title: '구름',
        },
      ],
    },
    {
      id: 4,
      title: '목요일',
      category: '날씨',
      rating: 10,
      episodes: [
        {
          id: 1,
          title: '눈',
        },
        {
          id: 2,
          title: '비',
        },
      ],
    },
    {
      id: 5,
      title: '금요일',
      category: '날씨',
      rating: 6,
      episodes: [
        {
          id: 1,
          title: '눈',
        },
        {
          id: 2,
          title: '비',
        },
        {
          id: 3,
          title: '구름',
        },
      ],
    },
  ];

  getAll(): Podcast[] {
    return this.podcasts;
  }

  create(podCastData: Podcast) {
    this.podcasts.push({
      id: this.podcasts.length + 1,
      ...podCastData,
    });
  }

  getOne(id: string): Podcast {
    return this.podcasts.find((podcast) => podcast.id === +id);
  }

  updatePodCast(podcastId: string, podCastData): boolean {
    let podcastIdx = this.podcasts.findIndex(
      (podcast) => podcast.id === +podcastId,
    );
    if (podcastIdx > -1) {
      this.podcasts[podcastIdx] = {
        id: +podcastId,
        ...podCastData,
      };
      return true;
    } else {
      return false;
    }
  }

  deleteOne(id: string): boolean {
    this.podcasts = this.podcasts.filter((podcast) => podcast.id !== +id);
    return true;
  }

  getAllEpisode(id: string): Episode[] {
    return this.getOne(id).episodes;
  }

  createEpisode(id: string, episodeDataData: Episode) {
    let episodes = this.getOne(id).episodes;
    episodes.push({
      id: episodes.length + 1,
      ...episodeDataData,
    });
  }

  updateEpisode(
    podcastId: string,
    episodeDataData: Episode,
    episodeId: string,
  ): boolean {
    let episodes = this.getOne(podcastId).episodes;
    let episodeIdx = episodes.findIndex((episode) => episode.id === +episodeId);
    if (episodeIdx > -1) {
      episodes[episodeIdx] = {
        id: +episodeId,
        ...episodeDataData,
      };
      return true;
    } else {
      return false;
    }
  }

  deleteEpisode(podcastId: string, episodeId: string): boolean {
    this.getOne(podcastId).episodes = this.getOne(podcastId).episodes.filter(
      (episode) => episode.id !== +episodeId,
    );
    return true;
  }
}
