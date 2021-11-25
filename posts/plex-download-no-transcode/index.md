---
path: /plex-download-no-transcode
title: "Plex Download: Prevent Unnecessary Transcoding"
date: "2021-11-25"
tags: ["Plex", "NAS"]
source: "https://forums.plex.tv/t/ios-experimental-player-streaming-direct-play-but-transcoding-same-video-on-sync/341774/12"
---

For some reason the supported video and audio formats (at least for iOS devices) configured on Plex are extremely conservative. Meaning Plex will transcode files that could easily be played back by the device.

To avoid unnecessary transcoding we need to adjust the device profiles.

> Note: In this example Plex is running on a Synology NAS.

### Connect using SSH

```sh
$ ssh <user>@<host> -p <port>
```

### Navigate to Profiles Location

All the profile files are stored in the Plex directory, e.g.:

```sh
$ cd /volume1/@appstore/Plex Media Server/Resources/Profiles
```

### Find Profiles to Adapt

Now the correct profile needs to be located. For new-ish iOS devices it's a file called `iOS.xml`.

### Backup Profile

First, make a backup of the profile:

```sh
cp iOS.xml iOS.xml.bak
```

> You might need to run the above command as root.

### Modify Profile

Now, replace the `VideoProfile` tag(s) inside `DirectPlayProfiles` with this:

```
<VideoProfile container="mkv,mov,mp4,mpegts,mpeg,mpegvideo,avi,flv,ogg" codec="h264,hevc,vp8,vp9,h263,mpeg1video,mpeg2video,mpeg4,vc1" audioCodec="aac,aac_latm,ac3,alac,flac,dca,vorbis,opus,eac3,mp1,mp2,mp3" subtitleCodec="ass,dvb_subtitle,vobsub,eia_608,pgs,microdvd,movtext,ssa,srt" />
```

> Root permissions are probably required to mutate this file.

Save the changes and close the SSH connection.

### Restart Plex Server

In order for the changes to take effect, the Plex Server needs to be restarted.
