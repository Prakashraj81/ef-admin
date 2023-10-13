import React, {useState, UseEffect} from "react";
import Image from "next/image";
import FullLayout from "../../../components/layouts/full/FullLayout";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
  TablePagination,
  Tooltip,
} from "@mui/material";
import DeleteModal from "../../../components/modal/delete-modal";
import { IconX } from '@tabler/icons-react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DashboardCard from "../../../components/shared/DashboardCard";
import { IconEdit, IconCirclePlus, IconTrashX } from "@tabler/icons-react";
import theme from "../../../components/shared/theme";
import SuccessAlert from "../../../components/alert/success-alert";
import AddService from "./add-service";

const products = [
  {
    id: "1",
    heading: "Blog heading",
    image: "/images/favicon-mine-life.png",
    date: "2023-06-05",
    status: "Active",
  },
  {
    id: "2",
    heading: "Blog heading",
    image: "/images/favicon-mine-life.png",
    date: "2023-06-05",
    status: "Active",
  },
  {
    id: "2",
    heading: "Blog heading",
    image: "/images/profile/user-1.jpg",
    date: "2023-06-05",
    status: "InActive",
  },
];

export default function Blog() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  let [EditModalOpen, setEditModalOpen] = React.useState(false);
  let [ModalId, setModalId] = useState(0);
  let [DeleteModalOpen, setDeleteModalOpen] = React.useState(false);
  let [SuccessMsg, setSuccessMsg] = React.useState(false);


  const EditModalFunction = () => {
    setEditModalOpen(true);
  };
  const CloseModalFunction = () => {
    setEditModalOpen(false);
  };

  //Edit function
  const editList = (event) => {
    let EditId = Number(atob(event.currentTarget.id));
    if (EditId !== 0) {
      setEditModalOpen(true);
      setModalId(EditId);
    }
    else {
      setEditModalOpen(false);
      setModalId(0);
    }
  }

  const DeleteModalFunction = (event) => {
    let value = event.currentTarget.id;
    let rowId = ModalId;
    if (value === "Yes") {
      console.log(rowId);
      setDeleteModalOpen(false);
      setSuccessMsg(true);
    }
    else {
      setDeleteModalOpen(false);
      setModalId(0);
    }
  };

  //Delete function
  const deleteList = (event) => {
    let DeleteId = Number(atob(event.currentTarget.id));
    if (DeleteId !== 0) {
      setDeleteModalOpen(true);
      setModalId(DeleteId);
    }
    else {
      setDeleteModalOpen(false);
      setModalId(0);
    }
  }
  return (
    <>
    {SuccessMsg && (<SuccessAlert />)}
      {DeleteModalOpen && (
        <DeleteModal DeleteModalOpen={DeleteModalOpen} DeleteModalFunction={DeleteModalFunction} />
      )}
      <AddService EditModalOpen={EditModalOpen} CloseModalFunction={CloseModalFunction}/>
      <DashboardCard title="">
        <div className="block md:flex lg:flex xl:flex 2xl:flex justify-between items-center">
          <Typography variant="h5">Blog list</Typography>
          <Button onClick={EditModalFunction} className="flex justify-between items-center bg-blue-600 text-white hover:bg-blue-400"><IconCirclePlus className="pr-2" />Add Service</Button>
        </div>

        <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
          <Table aria-label="simple table" sx={{ whiteSpace: "nowrap", mt: 2 }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    S.No
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Image
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Heading
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Date
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Status
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography align="center" variant="subtitle2" fontWeight={600}>
                    Action
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((product) => (
                  <TableRow key={product.name} sx={{ border: "2px solid #f6f9fc" }}>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Typography>
                        {product.id}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Image className="rounded-full mx-auto" src={product.image} width={40} height={40} alt="Image" />
                    </TableCell>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Typography>{product.heading}</Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      <Typography>{product.date}</Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: "2px solid #f6f9fc" }}>
                      {product.status === "Active" ? (
                        <>
                          <Chip
                            className="text-xs"
                            style={{
                              backgroundColor: theme.palette.success.light,
                              color: theme.palette.success.main,
                            }}
                            size="small"
                            label={product.status}
                          ></Chip>
                        </>
                      )
                        :
                        (
                          <>
                            <Chip
                              className="text-xs"
                              size="small"
                              style={{
                                backgroundColor: theme.palette.error.light,
                                color: theme.palette.error.main,
                              }}
                              label={product.status}
                            ></Chip>
                          </>
                        )
                      }
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-between items-center">
                        <Tooltip title="View" arrow>
                          <IconEdit onClick={editList} id={btoa(product.id)} className="mx-auto text-primary-blue cursor-pointer" />
                        </Tooltip>
                        <Tooltip title="Delete" arrow>
                          <IconTrashX onClick={deleteList} id={btoa(product.id)} className="mx-auto text-error-main cursor-pointer" />
                        </Tooltip>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(event, newPage) => {
            setPage(newPage);
          }}
          onRowsPerPageChange={(event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          }}
        />
      </DashboardCard>
    </>
  )
}

Blog.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};