export interface IVideoData {
  id: string;
  title: string;
  thumbnails: IThumbnail[];
  formats: IFormat[];
  duration: string;
}

export interface IError {
  error: string;
}

export interface IThumbnail {
  id: string;
  width: number;
  height: number;
  resolution: string;
  url: string;
}

export interface IFormat {
  id: string;
  filesize: number;
  url: string;
  resolution: string;
  hasVideo: boolean;
}

const getVideoData = async (url: string): Promise<IVideoData | IError> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/dl`, {
    method: 'POST',
    body: JSON.stringify({
      url,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const jsonResponse = await response.json();
  if (!isValidResponse(jsonResponse)) {
    return jsonResponse as IError;
  }

  return jsonResponse.video as IVideoData;
};

const isValidResponse = (body: any): boolean => {
  return !body.error;
};

const getLargestThumbnailURI = (videoData: IVideoData): IThumbnail => {
  let largestSize = 0;
  let largestThumbnail = <IThumbnail>{};

  videoData.thumbnails.forEach((thumbnail) => {
    const size = (thumbnail.width || 1) * thumbnail.height;
    if (size > largestSize) {
      largestSize = size;
      largestThumbnail = thumbnail;
    }
  });

  if (!largestThumbnail.width) {
    largestThumbnail.width = largestThumbnail.height * 1.6;
  }
  return largestThumbnail;
};

export { getVideoData, isValidResponse, getLargestThumbnailURI };
