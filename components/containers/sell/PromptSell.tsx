"use client";
import * as React from "react";
import {
  MobileStepper,
  InputLabel,
  Typography,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Box,
  IconButton,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import Image from "next/image";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Resizable } from "react-resizable";
import countryList from "react-select-country-list";
const ITEM_HEIGHT = 60;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const PromptSell = () => {
  const [activeStep, setActiveStep] = React.useState<number>(1);
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
    if (activeStep === 1) {
      setActiveStep(1);
    }
  };
  //-----------------prompt Type--------------------//
  const [promptType, setPromptType] = React.useState("DALL-E");
  const handleChangePromptType = (event: SelectChangeEvent) => {
    setPromptType(event.target.value);
  };
  //------------------prompt-----------------------------//
  const [prompt, setPrompt] = React.useState<string>("");
  const characterLimit: number = 41;
  const [prompt_limit, setPrompt_Limit] = React.useState<boolean>(false);
  const handlePromptFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPrompt = e.target.value;
    setPrompt(inputPrompt);

    if (inputPrompt.length <= characterLimit) {
      setPrompt_Limit(false);
    } else {
      const truncatedValue: string = inputPrompt.slice(0, characterLimit);
      setPrompt(truncatedValue);
      setPrompt_Limit(true);
    }
  };
  //-----------------------description--------------------//
  const [description, setDescription] = React.useState<string>("");
  const characterLimit_d: number = 501;
  const [description_limit, setDescription_Limit] =
    React.useState<boolean>(false);
  const handleDescriptionFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputDescription = e.target.value;
    setDescription(inputDescription);
    if (inputDescription.length <= characterLimit_d) {
      setDescription_Limit(false);
    } else {
      const truncatedValue: string = inputDescription.slice(
        0,
        characterLimit_d
      );
      setDescription(truncatedValue);
      setDescription_Limit(true);
    }
  };
  const [height, setHeight] = React.useState<number>(100);
  const handleResize = (
    e: React.SyntheticEvent,
    { size }: { size: { height: number } }
  ) => {
    setHeight(size.height);
  };
  //------------------price----------------//
  const [price, setPrice] = React.useState<number>(4.99);
  const handleChangePrice = (event: SelectChangeEvent) => {
    setPrice(Number(event.target.value));
  };
  //------------------------image--------------------//
  const [selectedImage, setSelectedImage] = React.useState<string[]>([]);
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage((prevSelectedImage) => [
        ...prevSelectedImage,
        URL.createObjectURL(file),
      ]);
      //   setSelectedFile(file);
      //   setFileUrl(file["name"]);
    } else {
      //   setFileUrl("");
      //   setSelectedFile(null);
      setSelectedImage((prevSelectedImage) => [...prevSelectedImage]);
    }
  };
  const deletePicture = (selectedItem: string) => {
    const updatedItems = selectedImage.filter((item) => item !== selectedItem);
    setSelectedImage(updatedItems);
  };
  //---------------countries-----------------//
  interface CountryData {
    value: string;
    label: string;
  }
  const [country_List, setCountry_List] = React.useState<CountryData[]>([]);
  React.useEffect(() => {
    const countries = countryList().getData();
    console.log(countries);
    setCountry_List(countries);
  }, []);
  const [countryName, setCountryName] = React.useState<string>("");
  const handleChangeCountryName = (event: SelectChangeEvent) => {
    setCountryName(event.target.value);
  };
  return (
    <section
      className="section shop sticky-parent"
      style={{ marginLeft: "8%", marginRight: "8%" }}
    >
      <div className="shop__sidebar sticky-item">
        <div
          className="row"
          style={{ marginBottom: "50px", placeItems: "center" }}
        >
          <div className="col-12 col-lg-1">
            <Button
              variant="contained"
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              style={{ backgroundColor: "#2E2846", borderRadius: "20px" }}
              startIcon={<KeyboardArrowLeft />}
            >
              Back
            </Button>
          </div>
          <div className="col-12 col-lg-10">
            <MobileStepper
              variant="progress"
              steps={6}
              position="static"
              activeStep={activeStep}
              sx={{ width: "200%", backgroundColor: "#120F23" }}
              nextButton={<></>}
              backButton={<></>}
            ></MobileStepper>
          </div>
          <div className="col-12 col-lg-1">
            <InputLabel sx={{ color: "white" }}>step 5/{activeStep}</InputLabel>
          </div>
        </div>
        <div className="row" hidden={activeStep == 1 ? false : true}>
          <div className="col-12 col-lg-6">
            <h4 style={{ color: "white", fontFamily: "sans-serif" }}>
              Start Selling your prompts
            </h4>
            <Typography sx={{ marginTop: "20px", color: "white" }}>
              PromptBase is an early marketplace for Midjourney, DALL-E, Stable
              Diffusion, Stability, Leonardo Prompts.
            </Typography>
            <Typography sx={{ marginTop: "20px", color: "white" }}>
              You can sell your own prompts on Prompts on PromptBase and start
              earning from your Prompt Engineering skills.
            </Typography>
            <Typography sx={{ marginTop: "20px", color: "white" }}>
              If your prompt is approved, you will keep 80% of revenue from
              every sale of your prompt
            </Typography>
            <Typography sx={{ marginTop: "20px", color: "white" }}>
              Get selling in just 2 minutes
            </Typography>
            <Button
              variant="contained"
              onClick={() => handleNext()}
              sx={{
                background: "linear-gradient(45deg, yellow, red)",
                "&:hover": {
                  color: "black",
                },
                borderRadius: "20px",
                marginTop: "10px",
              }}
            >
              Sell a prompt
            </Button>
            <Typography sx={{ marginTop: "20px", color: "white" }}>
              Please read our prompt submission guidelines before submitting
              your prompt so you understand what prompts can be sold on
              PromptBase.
            </Typography>
            <Typography sx={{ marginTop: "20px", color: "white" }}>
              Payouts from PromptBase occur when reaching a minimum $30.00
              balance threshold on monthly/weekly payout cycles. You can
              withdraw your balance earlier or below this threshold for a fee.
            </Typography>
          </div>
          <div className="col-12 col-lg-6"></div>
        </div>
        <div className="row" hidden={activeStep == 2 ? false : true}>
          <div className="col-12 col-lg-6">
            <div>
              <h4
                style={{
                  color: "white",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                Prompt Details
              </h4>
              <Typography sx={{ marginTop: "20px", color: "white" }}>
                Tell us about the prompt you want to sell.
              </Typography>
              <Typography sx={{ marginTop: "20px", color: "white" }}>
                These details are not final. Our team will make edits if it goes
                live.
              </Typography>
            </div>
            <div>
              <h5
                style={{
                  color: "white",
                  marginTop: "20px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                Prompt Type
              </h5>
              <Typography
                sx={{ marginTop: "20px", color: "white", fontStyle: "italic" }}
              >
                Select the type of prompt you want to sell
              </Typography>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: "10%",
                  background: "rgb(46,40,70)",
                  borderRadius: "10px",
                  marginTop: "20px",
                }}
              >
                <InputLabel
                  id="demo-simple-select-helper-label"
                  sx={{ color: "white" }}
                >
                  Model
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  name="model_s"
                  value={promptType}
                  label="Model"
                  onChange={handleChangePromptType}
                  sx={{ color: "white" }}
                >
                  <MenuItem value="DALL-E">DALL-E</MenuItem>
                  <MenuItem value="Leonardo">Leonardo</MenuItem>
                  <MenuItem value="stability">Stability</MenuItem>
                  <MenuItem value="Midjourney">Midjourney</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <h5
                style={{
                  color: "white",
                  marginTop: "20px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                Name
              </h5>
              <Typography
                sx={{ marginTop: "15px", color: "white", fontStyle: "italic" }}
              >
                Suggest a title for this prompt
              </Typography>
              <TextField
                error={prompt_limit}
                id="prompt"
                label="prompt"
                type="search"
                variant="outlined"
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                sx={{
                  marginTop: "20px",
                  width: "100%",
                  backgroundColor: "rgb(46, 40, 70)",
                  borderRadius: "10px",
                }}
                value={prompt}
                onChange={handlePromptFieldChange}
              ></TextField>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  marginTop: "20px",
                }}
              >
                40/{prompt.length}
              </div>
            </div>

            <h5
              style={{
                color: "white",
                marginTop: "20px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              Description
            </h5>
            <Typography
              sx={{ marginTop: "15px", color: "white", fontStyle: "italic" }}
            >
              Describe what your prompt does to a potential buyer. A more
              detailed description will increase your sales.
            </Typography>
            <Resizable
              width={500}
              height={height}
              onResize={handleResize}
              handle={
                <div style={{ width: 30, height: 30, background: "red" }} />
              }
            >
              <TextField
                error={description_limit}
                id="description"
                label="description"
                type="search"
                variant="outlined"
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
                multiline
                rows={1}
                sx={{
                  marginTop: "20px",
                  width: "100%",
                  backgroundColor: "rgb(46, 40, 70)",
                  borderRadius: "10px",
                }}
                value={description}
                onChange={handleDescriptionFieldChange}
              />
            </Resizable>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "20px",
              }}
            >
              500/{description.length}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h5
                style={{
                  color: "white",
                  marginTop: "20px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                Estimated Price
              </h5>
              <Typography
                sx={{ marginTop: "15px", color: "white", fontStyle: "italic" }}
              >
                What do you thin the price of this prompt should be?
              </Typography>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: "10%",
                  background: "rgb(46,40,70)",
                  borderRadius: "10px",
                  marginTop: "20px",
                  width: "fit-content",
                }}
              >
                <InputLabel
                  id="demo-simple-select-helper-label"
                  sx={{ color: "white" }}
                >
                  Price
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  name="price"
                  value={String(price)}
                  label="Price"
                  onChange={handleChangePrice}
                  sx={{ color: "white" }}
                >
                  <MenuItem value="2.99">$2.99</MenuItem>
                  <MenuItem value="3.99">$3.99</MenuItem>
                  <MenuItem value="4.99">$4.99</MenuItem>
                  <MenuItem value="5.99">$5.99</MenuItem>
                  <MenuItem value="6.99">$6.99</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                onClick={() => handleNext()}
                sx={{
                  background: "linear-gradient(45deg, yellow, red)",
                  "&:hover": {
                    color: "black",
                  },
                  borderRadius: "20px",
                  marginTop: "10px",
                  width: "fit-content",
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
        <div className="row" hidden={activeStep == 3 ? false : true}>
          <div className="col-12 col-lg-6">
            <h4
              style={{
                color: "white",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              Prompt File
            </h4>
            <h5
              style={{
                color: "white",
                marginTop: "20px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              Version
            </h5>
            <Typography
              sx={{ marginTop: "15px", color: "white", fontStyle: "italic" }}
            >
              Select the version of DALL-E you are using
            </Typography>
            <h5
              style={{
                color: "white",
                marginTop: "20px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              *Prompt
            </h5>
            <Typography
              sx={{ marginTop: "15px", color: "white", fontStyle: "italic" }}
            >
              Put any variables in &#91;square brackets&#93;.
            </Typography>
            <TextField
              id="prompt"
              label="prompt"
              type="search"
              variant="outlined"
              placeholder="An Impressionist oil painting of [Flower] in a purple vase..."
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              InputProps={{
                style: {
                  color: "white",
                },
              }}
              multiline
              rows={1}
              sx={{
                marginTop: "20px",
                width: "100%",
                backgroundColor: "rgb(46, 40, 70)",
                borderRadius: "10px",
              }}
            />
            <h5
              style={{
                color: "white",
                marginTop: "20px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              *Testing Prompt
            </h5>
            <Typography
              sx={{ marginTop: "15px", color: "white", fontStyle: "italic" }}
            >
              One example of your prompt with all variables filled in e.g.
              &#91;animal&#93;&#8594;Koala. We will use this to test your prompt
              - buyers will not see this. Do not include any instructions here
            </Typography>
            <TextField
              id="testing prompt"
              label="testing prompt"
              type="search"
              variant="outlined"
              placeholder="An Impressionist oil painting of rose in a purple vase..."
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              InputProps={{
                style: {
                  color: "white",
                },
              }}
              multiline
              rows={1}
              sx={{
                marginTop: "20px",
                width: "100%",
                backgroundColor: "rgb(46, 40, 70)",
                borderRadius: "10px",
              }}
            />
            <h5
              style={{
                color: "white",
                marginTop: "20px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              *Prompt Instructions
            </h5>
            <Typography
              sx={{ marginTop: "15px", color: "white", fontStyle: "italic" }}
            >
              Any extra tips or examples for the buyer on how to use this prompt
            </Typography>
            <TextField
              id="prompt instructions"
              label="prompt instructions"
              type="search"
              variant="outlined"
              placeholder="To get the most out of this prompt you need to..."
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              InputProps={{
                style: {
                  color: "white",
                },
              }}
              multiline
              rows={1}
              sx={{
                marginTop: "20px",
                width: "100%",
                backgroundColor: "rgb(46, 40, 70)",
                borderRadius: "10px",
              }}
            />
            <h5
              style={{
                color: "white",
                marginTop: "20px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              *Example images
            </h5>
            <Typography
              sx={{ marginTop: "15px", color: "white", fontStyle: "italic" }}
            >
              Upload 4 example images generated by this prompt &#40;no collages
              or edits&#41;
            </Typography>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                gap: "10px",
              }}
            >
              {selectedImage?.map((it, index) => (
                <Box
                  key={index}
                  height="150px"
                  sx={{
                    marginTop: "20px",
                    width: "150px",
                    border: "1px solid lightgrey",
                    position: "relative",
                  }}
                >
                  <Image
                    src={it}
                    alt="Image"
                    layout="intrinsic"
                    priority
                    width={150}
                    height={150}
                  />
                  <IconButton
                    sx={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "15px 15px 15px 15px",
                      position: "absolute",
                      backgroundColor: "red",
                      color: "white",
                      right: "1px",
                    }}
                    onClick={() => deletePicture(it)}
                  >
                    <HighlightOffIcon />
                  </IconButton>
                </Box>
              ))}
              {selectedImage.length == 4 ? (
                <></>
              ) : (
                <Box
                  height="150px"
                  sx={{
                    marginTop: "20px",
                    width: "150px",
                    border: "1px solid lightgrey",
                    position: "relative",
                  }}
                >
                  <Button
                    variant="contained"
                    component="label"
                    sx={{
                      textTransform: "none",
                      color: "white",
                      width: "60px",
                      height: "60px",
                      borderRadius: "30px 30px 30px 30px",
                      position: "absolute",
                      left: "45px",
                      top: "45px",
                      backgroundColor: "rgba(0,0,0,0.45)",
                    }}
                  >
                    <input
                      hidden
                      type="file"
                      accept="image/*"
                      onChange={onFileChange}
                    />
                    <AddPhotoAlternateIcon
                      sx={{ width: "30px", height: "30px" }}
                    />
                  </Button>
                </Box>
              )}
            </div>
            <Button
              variant="contained"
              onClick={() => handleNext()}
              sx={{
                background: "linear-gradient(45deg, yellow, red)",
                "&:hover": {
                  color: "black",
                },
                borderRadius: "20px",
                marginTop: "10px",
                width: "fit-content",
              }}
            >
              Next
            </Button>
          </div>
        </div>
        <div className="row" hidden={activeStep == 4 ? false : true}>
          <div className="col-12 col-lg-6">
            <h4
              style={{
                color: "white",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              Enable Payouts
            </h4>
            <Typography sx={{ marginTop: "20px", color: "white" }}>
              Connect your bank account with Script to start receiving payouts
              from PromptBase for sales of your prompts
            </Typography>
            <h5
              style={{
                color: "white",
                marginTop: "20px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              Country of residence
            </h5>
            <Typography
              sx={{ marginTop: "15px", color: "white", fontStyle: "italic" }}
            >
              We need to know this for sending payouts. Please read our FAQ if
              your country does not appear here.
            </Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: "10%",
                  background: "rgb(46,40,70)",
                  borderRadius: "10px",
                  marginTop: "20px",
                  width: "fit-content",
                }}
              >
                <InputLabel
                  id="demo-simple-select-helper-label"
                  sx={{ color: "white" }}
                >
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  name="model_s"
                  value={countryName}
                  label="Model"
                  onChange={handleChangeCountryName}
                  sx={{ color: "white" }}
                  MenuProps={MenuProps}
                >
                  {country_List.map((country) => (
                    <MenuItem key={country.value} value={country.value}>
                      {country.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                variant="contained"
                onClick={() => handleNext()}
                sx={{
                  background: "linear-gradient(45deg, yellow, red)",
                  "&:hover": {
                    color: "black",
                  },
                  borderRadius: "20px",
                  marginTop: "10px",
                  width: "fit-content",
                }}
              >
                Enable Payouts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PromptSell;
