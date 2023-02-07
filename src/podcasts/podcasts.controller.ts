import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Episode } from './entities/episode.entity';
import { Podcast } from './entities/podcast.entity';
import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastService: PodcastsService) {}

  @Get()
  getAll(): Podcast[] {
    return this.podcastService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') podcastId: string): Podcast {
    return this.podcastService.getOne(podcastId);
  }

  @Post()
  create(@Body() podcastData) {
    return this.podcastService.create(podcastData);
  }

  @Patch('/:id')
  updatePodCast(@Param('id') podcastId: string, @Body() podcastData) {
    return this.podcastService.updatePodCast(podcastId, podcastData);
  }

  @Delete('/:id')
  removePodCast(@Param('id') podcastId: string) {
    return this.podcastService.deleteOne(podcastId);
  }

  @Get('/:id/episodes')
  getEpisodes(@Param('id') podcastId: string): Episode[] {
    return this.podcastService.getAllEpisode(podcastId);
  }

  @Post('/:id/episodes')
  createEpisodes(@Param('id') podcastId: string, @Body() episodeData) {
    return this.podcastService.createEpisode(podcastId, episodeData);
  }

  @Patch('/:id/episodes/:episodeId')
  updateEpisode(
    @Param('id') podcastId: string,
    @Body() episodeData,
    @Param('episodeId') episodeId: string,
  ) {
    return this.podcastService.updateEpisode(podcastId, episodeData, episodeId);
  }

  @Delete('/:id/episodes/:episodeId')
  removeEpisode(
    @Param('id') podcastId: string,
    @Param('episodeId') episodeId: string,
  ) {
    return this.podcastService.deleteEpisode(podcastId, episodeId);
  }
}
