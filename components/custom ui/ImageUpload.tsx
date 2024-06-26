import { CldUploadWidget } from 'next-cloudinary';
import { Plus , Trash2} from 'lucide-react';

import { Button } from '../ui/button';
import Image from 'next/image';

interface ImageUploadProps {
  value: string[],
  onChange: (value: string) => void,
  onRemove: (value: string) => void,
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, onRemove, value }) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <div>

      <div className='md-4 flex-wrap item-center gap-4'>
        {value.map((url, id) => (
          <div key={id} className='relative w-[200px] h-[200px]'>
            <div className='absolute top-0 right-0 z-10'>
              <Button onClick={() => onRemove(url)} size="sm" className='bg-red-1 text-white'>
              <Trash2 className='cursor-pointer h-4 w-4'/>
              </Button>
            </div>
            <Image              
              src={url}
              alt="collection"
              className="object-cover rounded-lg"
              fill
            />
          </div>
        ))}
      </div>

      <CldUploadWidget uploadPreset="caixinhaApp" onUpload={onUpload}>
        {({ open }) => {
          return (
            <Button onClick={() => open()} className='bg-grey-1 text-white mt-4'>
              <Plus className="h-4 w-4 mr-2" />
              Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}

export default ImageUpload