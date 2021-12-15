import React, { useRef, useState } from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { appColors } from "../../appTheme/appTheme";
import { ReactComponent as IconEdit } from "../../img-assets/icon-edit.svg";
import { ReactComponent as PlusIcon } from "../../img-assets/grey-plus.svg";
import {
  LoaderSpinner,
  WrapInput,
} from "../../pages/auth/register/form/LoginForm";
import api, { url_base } from "../../api/api";
import Select from "../dropdown/Select";
import { toast, ToastContainer } from "react-toastify";

const Wrapper = styled.div`
  background-color: ${appColors.WHITE};

  .wrap__add {
    margin: 0 auto;
    max-width: 120px;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em 0;

  span {
    font-family: ${appFont.MEDIUM};
    color: #434343;
    font-size: 2rem;
  }

  svg {
    max-width: 20px;
    position: relative;
    bottom: 10px;
  }
`;

const ImageUploadBox = styled.div`
  background: #f5f5f5 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  padding: 1em;
  width: 40%;
  margin: 1em auto;
  min-width: 150px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    max-width: 120%;
  }
`;

const ImageUploadContent = styled.div`
  max-width: 200px;
  margin: 0px auto;
  text-align: center;
  svg {
    display: block;
    margin: 15px auto;
    max-height: 25px;
    position: relative;
  }
  span {
    color: black;
    font-family: ${appFont.LIGHTPOPPING};
    display: block;
    margin: 0.5em auto;
    text-align: center;
  }

  img {
    height: 100px !important;
    width: 100% !important;
  }
`;

const InputField = styled.input`
  display: block;
  background: rgba(245, 245, 245, 1) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.11);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  padding: 1em 4em 1em 1em;
  margin: 1.5em 0;
  font-size: 15px;
  font-family: ${appFont.LIGHTPOPPING};
  outline: none;
  border: none;
  position: relative;

  &::focus {
    outline: none;
    border: none;
  }
  &:placeholder {
    color: rgba(67, 67, 67, 1);
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const AddButton = styled.button`
  background: transparent linear-gradient(107deg, #74e0ff 0%, #41a0ff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #41a0ff83;
  padding: 0.8em 2em;
  border-radius: 5px;
  outline: none;
  color: white;
  border: none;
  float: right;

  &::focus {
    outline: none;
    border: none;
  }
`;

export const BtnAdd = styled.button`
  background: transparent linear-gradient(107deg, #74e0ff 0%, #41a0ff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #41a0ff83;
  padding: 0.8em 2em;
  border-radius: 5px;
  outline: none;
  color: white;
  border: none;
  float: right;

  &::focus {
    outline: none;
    border: none;
  }
`;

const Span = styled.span`
  font-size: 15px;
  font-family: ${appFont.LIGHTPOPPING};
  padding-left: 5px;
`;

const AddDigitalCollateral = (props) => {
  const [loading, setLoading] = useState(false);
  const [loading_img, setLoadingImg] = useState("");
  const [selected_category, setCaterogy] = useState({});
  const [file_url, SetFileUrl] = useState("");
  const [file_type, setFileType] = useState("");
  const [access_type, SetAccessType] = useState("restricted");

  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const file_ref = useRef();

  const input_ref = useRef();

  const cats = [
    { value: "Banners/Fliers", label: "Banners/Fliers" },
    { value: "Presentations", label: "Presentations" },
    { value: "Demo", label: "Demo" },
    { value: "Webinars", label: "Webinars" },
    { value: "Podcast", label: "Podcast" },
    { value: "Tutorials", label: "Tutorials" },
    { value: "Blog", label: "Blogs" },
    { value: "Whats' New", label: "What's New" },
    { value: "References", label: "References" },
  ];

  const add_collateral = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (selected_category.value === "Blog") {
      const payload = {
        product_id: localStorage.getItem("product_id"),
        title: title,
        post: description,
        file: url_base + file_url,
      };
      const status = await api.create("posts", payload);
      if (status.status) {
        setLoading(false);
        toast("Blog Post  added");
        props.close(selected_category.value);
      } else {
        setLoading(false);
        setError(status.message);
      }

      const payload_ = {
        product_id: localStorage.getItem("product_id"),
        file: url_base + file_url,
        category: selected_category.value,
        type: file_type,
        title: title,
        description: description,
        access: access_type,
      };
      const status_ = await api.create("files", payload_);
      if (status_.status) {
        setLoading(false);
        toast("Digital Collateral added");
        props.close(selected_category.value);
      } else {
        setLoading(false);
        setError(status.message);
      }
    } else {
      const payload = {
        product_id: localStorage.getItem("product_id"),
        file: url_base + file_url,
        category: selected_category.value,
        type: file_type,
        title: title,
        description: description,
        access: access_type,
      };
      const status = await api.create("files", payload);
      if (status.status) {
        setLoading(false);
        toast("Digital Collateral added");
        props.close(selected_category.value);
      } else {
        setLoading(false);
        setError(status.message);
      }
    }
  };

  const fileOnChange = async (e) => {
    setLoadingImg(true);
    /*Selected files data can be collected here.*/
    const newFile = e.target.files[0];
    console.log(e.target.value);
    let fileObj = new FormData();
    setFileType(newFile.type);
    fileObj.append("file", newFile);
    fileObj.append("folder", newFile.type);
    const fileResponse = await api.upload("files/upload/temp", fileObj);
    if (fileResponse.status) {
      setLoadingImg(false);
      SetFileUrl(fileResponse.url);
    } else {
      if (fileResponse) {
        setLoadingImg(false);
      }
    }
  };

  const toggle_access = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      SetAccessType("open");
    } else {
      SetAccessType("restricted");
    }
  };

  const fetchValue = (data) => {
    setCaterogy(data);
  };

  const handleFileOnchange = () => {
    file_ref.current.click();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  return (
    <Wrapper>
      <ToastContainer />
      <Heading>
        <span>Digital Collateral</span>
        <IconEdit />
      </Heading>

      <form onSubmit={add_collateral}>
        <WrapInput>
          <ImageUploadBox onClick={handleFileOnchange}>
            {!loading_img && !file_url && (
              <ImageUploadContent>
                <PlusIcon />
                <span>Add media</span>
              </ImageUploadContent>
            )}

            {!loading_img && file_url && (
              <ImageUploadContent>File uploaded</ImageUploadContent>
            )}
            {loading_img && !file_url && <LoaderSpinner />}
          </ImageUploadBox>
          <input hidden type="file" ref={file_ref} onChange={fileOnChange} />
        </WrapInput>
        <WrapInput>
          <Select
            holder="Select Category"
            getValue={fetchValue}
            options={cats}
          />
        </WrapInput>

        <WrapInput>
          <InputField placeholder="Title" onChange={handleTitleChange} />
          <div style={{ marginBottom: "1em" }}>
            <input type="checkbox" ref={input_ref} onChange={toggle_access} />
            <Span>Allow access</Span>
          </div>
        </WrapInput>

        <WrapInput>
          <textarea
            placeholder="Description"
            onChange={handleDescriptionChange}
          />
        </WrapInput>
        {loading && <LoaderSpinner />}

        <AddButton style={{ marginTop: "2em" }}>Enter</AddButton>
      </form>
    </Wrapper>
  );
};

export default AddDigitalCollateral;
