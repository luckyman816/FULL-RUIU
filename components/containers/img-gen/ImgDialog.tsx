"use client";
import { saveAs } from "file-saver";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Image, { StaticImageData } from "next/image";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { FC } from "react";

type ImgDialogProps = {
  open: boolean;
  imgURL: StaticImageData;
  handleClose: () => void;
};
const ImgDialog: FC<ImgDialogProps> = ({ open, imgURL, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  //---------------------------Download part-------------------------------//
  type functionDownloadType = () => void;
  const handleImageDownload: functionDownloadType = async () => {
    const imageURL:StaticImageData = imgURL;
    const response = await fetch(String(imageURL));
    const blob = await response.blob();
    saveAs(URL.createObjectURL(blob), "image.jpg");
  };
  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent className="img-dialog-container">
        <Image
          src={imgURL}
          alt="Image"
          layout="intrinsic"
          priority
          width={500}
          height={500}
        />
      </DialogContent>
      <DialogActions className="img-dialog-container">
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleImageDownload} autoFocus>
          Download
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ImgDialog;
