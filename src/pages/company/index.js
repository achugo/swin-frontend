import React, { useEffect, useState } from "react";
import MainDashboardContainer from "../../components/StyledComponents/MainDashBoardContainer";
import Gutter from "../../components/StyledComponents/Gutter";
import Main from "../../components/main/Main";
import Description from "../../components/StyledComponents/DescriptionParagraph";
import { ReactComponent as EditIcon } from "../../img-assets/edit-icon.svg";
import { ReactComponent as DeleteIcon } from "../../img-assets/delete-icon.svg";
import SoftwareEditHeader from "../../components/SoftwareEditHeader";
import SoftwareEditButton from "../../components/SoftwareEditButton";
import ContactForm from "../../components/ContactForm";
import styled from "styled-components";
import EditCompanyModal from "../../components/modals/EditCompany";
import Modal from "react-responsive-modal";
import AddSalesManager from "../../components/modals/SelectRegion";
import { BtnAdd } from "../../components/modals/SalesModal";
import api from "../../api/api";

const EditButton = styled.button`
  background: transparent linear-gradient(107deg, #74e0ff 0%, #41a0ff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #41a0ff83;
  padding: 0.8em 1.5em;
  border-radius: 5px;
  outline: none;
  color: white;
  border: none;

  &::focus {
    outline: none;
    border: none;
  }
`;

const Section = styled.section`
  margin-top: "3em";
  position: relative;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1em;

  th {
    text-align: left;
    padding: 1em;
  }

  tbody {
    tr {
      padding: 1em;
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 20px #0000001c;
      border-radius: 10px;
    }
    tr td:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    tr td:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

  td {
    padding: 1em;
    border: none;

    svg {
      margin: 0px 0.5em;
      max-width: 15px;
      cursor: pointer;
    }
  }
`;

const CompanyPage = () => {
  const [open, setOpen] = useState(false);
  const [user_data, setUserData] = useState([]);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const userData = JSON.parse(localStorage.getItem("payload"));

  useEffect(() => {
    list_sales_mgr();
  }, []);

  const list_sales_mgr = async (e) => {
    const status = await api.get("sales");
    if (status.status) {
      setUserData(status.data);
      // triggerClose();
    } else {
      alert("error");
    }
  };

  return (
    <>
      <Modal open={open} onClose={onCloseModal} center>
        <AddSalesManager triggerClose={onclose} />
      </Modal>
      <Main>
        <Gutter>
          <section style={{ display: "flex", justifyContent: "flex-end" }}>
            {/* <EditButton onClick={onOpenModal}>
              Edit Company
              <Icon name="edit" style={{ marginLeft: "0.5rem" }} />
            </EditButton> */}
          </section>
        </Gutter>
        <MainDashboardContainer>
          <SoftwareEditHeader />
          <SoftwareEditButton />
          <Gutter bottom={15}>
            <Description>
              <p>
                Linda Rosencrance Software is a set of instructions, data or
                programs used to operate computers and execute specific tasks.
                Opposite of hardware, which describes the physical aspects of a
                computer, software is a generic term used to refer to
                applications, scripts and programs that run on a device.
              </p>

              <p>
                Software can be thought of as the variable part of a computer,
                and hardware the invariable part. Software is often divided into
                categories. Application software refers to user-downloaded
                programs that fulfill a want or need. Examples of applications
                include office suites, database programs, web browsers, word
                processors, software development tools, image editors and
                communication platforms.
              </p>
            </Description>
          </Gutter>
          <ContactForm />
          {userData && userData.companies[0].type === "vendor" && (
            <BtnAdd style={{ float: "none" }} onClick={onOpenModal}>
              Add Sales Manager
            </BtnAdd>
          )}

          <Section>
            <Table>
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Region</th>
                <th>Country</th>
                <th>Status</th>

                <th>Actions</th>
              </tr>

              <tbody>
                {user_data.length > 0 &&
                  user_data.map((data, index) => {
                    return (
                      <tr>
                        <td>{user_data.indexOf(data) + 1}</td>
                        <td>
                          {data.user_id.first_name} {data.user_id.last_name}{" "}
                        </td>
                        <td>{data.region}</td>
                        <td>{data.country}</td>
                        <td>{data.user_id.status}</td>

                        <td>
                          <>
                            <EditIcon />
                            <DeleteIcon />
                          </>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Section>
        </MainDashboardContainer>
      </Main>
    </>
  );
};
export default CompanyPage;
