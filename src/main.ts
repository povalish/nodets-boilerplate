import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

//
//

type DownloadAssetsOptions = {
  cleanDir?: boolean;
  isLTC?: boolean;
  isSURF?: boolean;
  isETH?: boolean;
  isUploadToS3?: boolean;
  isOverrideHistory?: boolean;
};

//
//

console.log('OK!');
