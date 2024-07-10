// import React, { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { UserContext } from "../UserContext";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import { Button } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const NewsDetail = () => {
//   const { user } = useContext(UserContext);
//   const { postId } = useParams();
//   const [data, setData] = useState({});
//   const [comment, setComment] = useState({});
//   const [userImage, setUserImage] = useState("");
//   const [context, setContext] = useState("");
//   const [image, setImage] = useState("");

//   useEffect(() => {
//     getData();
//   }, [postId]);

//   useEffect(() => {
//     if (data.context) {
//       document.title = data.context;
//     }
//   }, [data.context]);

//   useEffect(() => {
//     if (user && user.accountId) {
//       axios
//         .get(`https://localhost:7088/api/Accounts/${user.accountId}/Image`, {
//           responseType: "blob",
//         })
//         .then((response) => {
//           const url = URL.createObjectURL(response.data);
//           setUserImage(url);
//         })
//         .catch((error) => {
//           console.error("Error fetching user image:", error);
//         });
//     }
//   }, [user, user.accountId]);

//   const getData = () => {
//     axios
//       .get(`https://localhost:7088/api/Posts/${postId}`)
//       .then((result) => {
//         setData(result.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const getComment = () => {
//     axios
//       .get(`https://localhost:7088/api/Comments/${commentId}`)
//       .then((result) => {
//         setComment(result.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleSave = () => {
//     const url = "https://localhost:7088/api/Comments";
//     const commentData = {
//       userId: user.accountId,
//       context: context,
//       image: image,
//       postId: postId,
//     };

//     axios
//       .post(url, commentData)
//       .then((response) => {
//         getData();
//         clear();
//         toast.success("Comment successfully added");
//       })
//       .catch((error) => {
//         console.error("Error adding comment:", error);
//         toast.error("Failed to add comment");
//       });
//   };

//   const clear = () => {
//     setContext("");
//     setImage("");
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="court-name">{data.context}</div>
//       <div
//         style={{
//           display: "grid",
//           justifyContent: "center",
//           gridTemplateColumns: "50% 50%",
//           margin: "0 112px",
//         }}
//       ></div>
//       <div className="tooltip-container">
//         <span className="tooltip">
//           <span style={{ display: "flex", margin: "3px" }}>
//             <strong className="available"></strong> : Available
//             <strong className="unavailable"></strong> : Unavailable
//           </span>
//         </span>
//         <span className="text">?</span>
//       </div>
//       <div className="full-infor" style={{ margin: "63px 138px" }}>
//         <div className="court-con">Quy định</div>
//         <div className="rule" style={{ marginTop: "11px" }}>
//           {data.title}
//         </div>
//       </div>
//       <InputGroup style={{ justifyContent: "center", marginBottom: "40px" }}>
//         <InputGroup.Text>
//           {userImage ? (
//             <img
//               src={userImage}
//               alt="User"
//               style={{ width: "30px", height: "30px", borderRadius: "20px" }}
//             />
//           ) : (
//             <div
//               style={{
//                 width: "30px",
//                 height: "30px",
//                 backgroundColor: "gray",
//               }}
//             ></div>
//           )}
//         </InputGroup.Text>
//         <div className="col-sm-9">
//           <Form.Control
//             as="textarea"
//             aria-label="With textarea"
//             rows={4}
//             value={context}
//             onChange={(e) => setContext(e.target.value)}
//           />
//           <Button variant="primary float-end mt-2" onClick={handleSave}>
//             Bình luận
//           </Button>
//         </div>
//       </InputGroup>
//       <InputGroup style={{ justifyContent: "center", marginBottom: "40px" }}>
//         <InputGroup.Text>
//           {userImage ? (
//             <img
//               src={userImage}
//               alt="User"
//               style={{ width: "30px", height: "30px", borderRadius: "20px" }}
//             />
//           ) : (
//             <div
//               style={{
//                 width: "30px",
//                 height: "30px",
//                 backgroundColor: "gray",
//               }}
//             ></div>
//           )}
//         </InputGroup.Text>
//         <div className="col-sm-9">
//           {comment.context}
//         </div>
//       </InputGroup>
//     </>
//   );
// };

// export default NewsDetail;

// import React, { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { UserContext } from "../UserContext";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import { Button } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const NewsDetail = () => {
//   const { user } = useContext(UserContext);
//   const { postId } = useParams();
//   const [data, setData] = useState({});
//   const [comments, setComments] = useState([]);
//   const [userImage, setUserImage] = useState("");
//   const [context, setContext] = useState("");
//   const [image, setImage] = useState("");

//   useEffect(() => {
//     getData();
//   }, [postId]);

//   useEffect(() => {
//     if (data.context) {
//       document.title = data.context;
//     }
//   }, [data.context]);

//   useEffect(() => {
//     if (user && user.accountId) {
//       axios
//         .get(`https://localhost:7088/api/Accounts/${user.accountId}/Image`, {
//           responseType: "blob",
//         })
//         .then((response) => {
//           const url = URL.createObjectURL(response.data);
//           setUserImage(url);
//         })
//         .catch((error) => {
//           console.error("Error fetching user image:", error);
//         });
//     }
//   }, [user, user.accountId]);

//   const getData = () => {
//     axios
//       .get(`https://localhost:7088/api/Posts/${postId}`)
//       .then((result) => {
//         setData(result.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const getComments = (id) => {
//     axios
//       .get(`https://localhost:7088/api/Comments/${id}`)
//       .then((result) => {
//         setComments(result.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleSave = () => {
//     const url = "https://localhost:7088/api/Comments";
//     const commentData = {
//       userId: user.accountId,
//       context: context,
//       image: image,
//       postId: postId,
//     };

//     axios
//       .post(url, commentData)
//       .then((response) => {
//         getComments(); // Refresh comments after successful comment submission
//         clear(); // Clear input fields after successful comment submission
//         toast.success("Comment successfully added");
//       })
//       .catch((error) => {
//         console.error("Error adding comment:", error);
//         toast.error("Failed to add comment");
//       });
//   };

//   const clear = () => {
//     setContext("");
//     setImage(""); // Optionally clear image state if needed
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="court-name">{data.context}</div>
//       <div
//         style={{
//           display: "grid",
//           justifyContent: "center",
//           gridTemplateColumns: "50% 50%",
//           margin: "0 112px",
//         }}
//       ></div>
//       <div className="tooltip-container">
//         <span className="tooltip">
//           <span style={{ display: "flex", margin: "3px" }}>
//             <strong className="available"></strong> : Available
//             <strong className="unavailable"></strong> : Unavailable
//           </span>
//         </span>
//         <span className="text">?</span>
//       </div>
//       <div className="full-infor" style={{ margin: "63px 138px" }}>
//         <div className="court-con">Quy định</div>
//         <div className="rule" style={{ marginTop: "11px" }}>
//           {data.title}
//         </div>
//       </div>
//       <InputGroup style={{ justifyContent: "center", marginBottom: "40px" }}>
//         <InputGroup.Text>
//           {userImage ? (
//             <img
//               src={userImage}
//               alt="User"
//               style={{ width: "30px", height: "30px", borderRadius: "20px" }}
//             />
//           ) : (
//             <div
//               style={{
//                 width: "30px",
//                 height: "30px",
//                 backgroundColor: "gray",
//               }}
//             ></div>
//           )}
//         </InputGroup.Text>
//         <div className="col-sm-9">
//           <Form.Control
//             as="textarea"
//             aria-label="With textarea"
//             rows={4}
//             value={context}
//             onChange={(e) => setContext(e.target.value)}
//           />
//           <Button variant="primary float-end mt-2" onClick={handleSave}>
//             Bình luận
//           </Button>
//         </div>
//       </InputGroup>

//     </>
//   );
// };

// export default NewsDetail;

import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsDetail = () => {
  const { user } = useContext(UserContext);
  const { postId } = useParams();
  const [data, setData] = useState({});
  const [comments, setComments] = useState([]);
  const [userImage, setUserImage] = useState("");
  const [context, setContext] = useState("");
  const [image, setImage] = useState("");
  const [posts, setPost] = useState("");

  useEffect(() => {
    getData();
    getPost();
  }, [postId]);

  useEffect(() => {
    if (data.context) {
      document.title = data.context;
    }
  }, [data.context]);

  useEffect(() => {
    if (user && user.accountId) {
      axios
        .get(`https://localhost:7088/api/Accounts/${user.accountId}/Image`, {
          responseType: "blob",
        })
        .then((response) => {
          const url = URL.createObjectURL(response.data);
          setUserImage(url);
        })
        .catch((error) => {
          console.error("Error fetching user image:", error);
        });
    }
  }, [user, user.accountId]);

  const getData = () => {
    axios
      .get(`https://localhost:7088/api/Posts/${postId}`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPost = () => {
    axios
      .get(`https://localhost:7088/api/Posts`)
      .then((result) => {
        setPost(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getComments = () => {
    axios
      .get(`https://localhost:7088/api/Comments`)
      .then((result) => {
        console.log(result.data);
        setComments(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSave = () => {
    const url = "https://localhost:7088/api/Comments";
    const commentData = {
      userId: user.accountId,
      context: context,
      image: image,
      postId: postId,
    };

    axios
      .post(url, commentData)
      .then((response) => {
        getComments();
        clear();
        toast.success("Comment successfully added");
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
        toast.error("Failed to add comment");
      });
  };

  const clear = () => {
    setContext("");
    setImage(""); // Optionally clear image state if needed
  };

  return (
    <>
      <ToastContainer />
      <div className="court-name">{data.context}</div>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: "50% 50%",
          margin: "0 112px",
        }}
      ></div>
      <div className="tooltip-container">
        <span className="tooltip">
          <span style={{ display: "flex", margin: "3px" }}>
            <strong className="available"></strong> : Available
            <strong className="unavailable"></strong> : Unavailable
          </span>
        </span>
        <span className="text">?</span>
      </div>
      <div className="full-infor" style={{ margin: "63px 138px" }}>
        <div className="court-con">Quy định</div>
        <div className="rule" style={{ marginTop: "11px" }}>
          {data.title}
        </div>
      </div>
      <InputGroup style={{ justifyContent: "center", marginBottom: "40px" }}>
        <InputGroup.Text>
          {userImage ? (
            <img
              src={userImage}
              alt="User"
              style={{ width: "30px", height: "30px", borderRadius: "20px" }}
            />
          ) : (
            <div
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "gray",
              }}
            ></div>
          )}
        </InputGroup.Text>
        <div className="col-sm-9">
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            rows={4}
            value={context}
            onChange={(e) => setContext(e.target.value)}
          />
          <Button variant="primary float-end mt-2" onClick={handleSave}>
            Bình luận
          </Button>
        </div>
      </InputGroup>

      <div className="comments-section" style={{ margin: "63px 138px" }}>
        {/* {comments.map((comment) => (
          <InputGroup key={comment.commentId} style={{ marginBottom: "20px" }}>
            <InputGroup.Text>
              {comment.image ? (
                <img
                  src={comment.image}
                  alt="User"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "20px",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "gray",
                  }}
                ></div>
              )}
            </InputGroup.Text>
            <div className="col-sm-9">
              <div>{comment.context}</div>
            </div>
          </InputGroup>
        ))} */}
        {comments && comments.length > 0 ? (
          comments.map((item, index) => {
            const post = posts.find((post) => post.postId === item.postId);
            return (
              <div className="book-box" key={index}>
                {userImage ? (
                  <img
                    src={userImage}
                    alt="User"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "20px",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "gray",
                    }}
                  ></div>
                )}
                <div className="commentuser">{comments.context}</div>
              </div>
            );
          })
        ) : (
          <p>No court available</p>
        )}
      </div>
    </>
  );
};

export default NewsDetail;
