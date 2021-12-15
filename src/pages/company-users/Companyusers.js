import React, { useEffect, useState } from "react";
import Main from "../../components/main/Main";
import { Icon, Label, Loader, Menu } from "semantic-ui-react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { ReactComponent as EditIcon } from "../../img-assets/edit-icon.svg";
import { ReactComponent as DeleteIcon } from "../../img-assets/delete-icon.svg";
import EditModal from "../../components/modals/EditModal";
import Gutter from "../../components/StyledComponents/Gutter";
import AddCompanyUser from "../../components/modals/AddCompanyUser";
import { ReactComponent as BackIcon } from "../../img-assets/backIcon.svg";
import api from "../../api/api";
import { toast } from "react-toastify";
import SelectedUsers from "../../components/dropdown/SelectedUsers";
import { appFont } from "../../appTheme/appFont";
import { LoaderSpinner } from "../auth/register/form/LoginForm";
import { withRouter } from "react-router-dom";

const AddButton = styled.button`
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
  position: relative;

  .pagination {
    list-style-type: none;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    li {
      margin: 2em;

      a {
        outline: none;
        color: #434343;
        font-family: ${appFont.LIGHTPOPPING};
        border: none;
        cursor: pointer;
        &::active {
          outline: none;
          border: none;
        }
      }
    }
  }
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
const Center = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const BackWrapper = styled.div`
  margin-top: 50px;
  padding-left: 50px;
  svg {
    max-width: 40px;
    cursor: pointer;
  }
`;

const CompanyUsers = (props) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [user_data, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 7;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(user_data.length / PER_PAGE);

  useEffect(() => {
    get_users();
  }, []);

  const convertToLocaldata = (data) => {
    return new Date(data).toLocaleDateString();
  };

  const get_users = async () => {
    const status = await api.get("users");
    if (status.status) {
      setUsers(status.data);
    } else {
      toast.error(status.message);
    }
  };

  const go_back_to_product = () => {
    props.history.push(`/dashboard/`);
  };

  console.log("user data", user_data);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  return (
    <>
      <Modal open={open} onClose={onCloseModal} center>
        <AddCompanyUser triggerClose={onCloseModal} />
      </Modal>
      <Main>
        <Gutter>
          <BackWrapper>
            <BackIcon onClick={go_back_to_product} />
          </BackWrapper>
          <section style={{ display: "flex", justifyContent: "flex-end" }}>
            <AddButton onClick={onOpenModal}>
              Add User
              <Icon name="edit" style={{ marginLeft: "0.5rem" }} />
            </AddButton>
          </section>
        </Gutter>
        <Section>
          {user_data.length === 0 ? (
            <Center>
              <LoaderSpinner />
            </Center>
          ) : (
            <>
              <Table>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Date created</th>
                  <th>Actions</th>
                </tr>

                <tbody>
                  {user_data.length > 0 &&
                    user_data
                      .slice(offset, offset + PER_PAGE)
                      .map((data, index) => {
                        return (
                          <tr>
                            <td>{user_data.indexOf(data) + 1}</td>
                            <td>
                              {data.first_name} {data.last_name}{" "}
                            </td>
                            <td>{data.email}</td>
                            <td>{data.phone_number}</td>
                            <td>{data.status}</td>
                            <td>{convertToLocaldata(data.created_at)}</td>
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

              <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </>
          )}
        </Section>
      </Main>
    </>
  );
};
export default withRouter(CompanyUsers);
