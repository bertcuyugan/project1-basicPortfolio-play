import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link';
import projectImage from "../public/coding.jpg";

const DataAnalysis: NextPage = () => {
  return (
    <div>
      <Image src={projectImage} />
      <div className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti, modi commodi ipsa a doloremque architecto natus aspernatur nisi neque, quis fugiat inventore ad maxime. Qui repudiandae nulla nostrum culpa?</div>     
      <div className="mt-6">
        <Link href="/">
          <a className="font-bold underline hover:text-indigo-600">Back</a>
        </Link>
      </div>
    </div>
  );
};

export default DataAnalysis;
