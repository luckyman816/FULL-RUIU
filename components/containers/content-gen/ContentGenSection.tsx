"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input, TextField, Button, Box } from "@mui/material";
const ContentGenSection = () => {
  const router = useRouter();
  const [emptyStatus, setEmptyStatus] = React.useState<boolean>(false);
  const [scrapUrl, setScrapUrl] = React.useState<string>("");
  const handleProceed = async() => {
    router.push("video-gen");
  }
  return (
    <section className="section shop sticky-parent">
      <div className="container">
        <div className="col-12 col-lg-12">
          <div className="shop__content sticky-item">
            <div className="row gaper">
              <div className="category__single">
                <div className="row" style={{alignItems: "center", justifyContent: "center"}}>
                  <div className="col-12 col-lg-10">
                    <TextField
                      error={emptyStatus ? true : false}
                      id="filled-url"
                      label="Scraping Url"
                      type="search"
                      variant="filled"
                      className="url-field"
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                      onChange={(e) => setScrapUrl(e.target.value)}
                    />
                  </div>
                  <div className="col-12 col-lg-2">
                    <Button variant="contained" sx={{width: "100%", backgroundColor: "rbg(25,118,210)"}}>Scrape</Button>
                  </div>
                </div>
                <div
                  className="thumb"
                  style={{ fontSize: "20px", marginTop: "50px" }}
                >
                  Contents from Website
                </div>
                <hr />
                <div>
                  <textarea
                    name="content"
                    id="content"
                    style={{
                      width: "100%",
                      height: "500px",
                      borderRadius: "20px",
                      color: "black",
                      padding: "20px",
                    }}
                  ></textarea>
                </div>
                <div className="meta">
                  <div className="meta-info">
                    <div className="meta-thumb"></div>
                  </div>
                </div>
                <div className="cta" onClick={handleProceed}>
                  <Link href="" className="btn btn--quaternary" >
                    Proceed
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentGenSection;
