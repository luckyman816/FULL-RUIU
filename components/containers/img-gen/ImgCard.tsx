"use client";
import Image, { StaticImageData } from "next/image";
import { Button } from "@mui/material";
import { FC } from "react";
type ImgCardProps = {
  imgURL: StaticImageData;
  handleShow: () => void;
};
const ImgCard: FC<ImgCardProps> = ({ imgURL, handleShow }) => {
  return (
    <div className="col-6 col-lg-6">
      <Image
        src={imgURL}
        alt="Image"
        layout="intrinsic"
        priority
        width={250}
        height={250}
      />
      <div className="img-card-subcontainer">
        <Button onClick={handleShow}>
          Show in detail
        </Button>
      </div>
    </div>
  );
};
export default ImgCard;
