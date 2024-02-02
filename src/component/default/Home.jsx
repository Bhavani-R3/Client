import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'

function Home() {
  const [docs,setDocs] = useState([])
  const url = "https://rest-api-0f5q.onrender.com"

  // callback hook
  const getCallback = useCallback(() => {
    const getInput = async () => {
      await axios.get(`api/file/open`).then(res => {
        setDocs(res.data.files)
      }).catch(err => toast.error(err.response.data.msg))
    }

    getInput()
  },[])

  useEffect(() => {
    getCallback()
  },[])

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center mt-5">
          <h3 className='display-3 text-primary'>Files</h3>
        </div>
      </div>

      <div className="row">
        {
          docs && docs.map((item,index) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                {/* <NavLink to={`/view/file/${item._id}`}> */}
                  <div className="card file mt-3 mb-3">
                    {
                      item.extName === ".png" || item.extName === ".jpg" ? <img src={`${url}/${item.newName}`} className='img-fluid' /> : null
                    }

                    {
                      item.extName === ".pdf" ? <embed src={"https://media.istockphoto.com/id/1304649959/vector/pdf-icon-on-white-background-file-pdf-icon-sign-pdf-format-symbol-flat-style.jpg?s=612x612&w=0&k=20&c=FUgE9ZJCNDvqc4uYO5-6RVZRpz1_oWQ4PiUSB2QdyeM="} className='img-fluid' /> : null
                    }

                    {
                      item.extName === ".pptx" || item.extName === ".ppt" ? <embed src={`https://cdn.pixabay.com/photo/2021/12/13/06/33/powerpoint-6867647_1280.png`} className='img-fluid'/> : null
                    }

                    {
                      item.extName === ".docx" || item.extName === ".doc" ? <embed src={`https://1000logos.net/wp-content/uploads/2020/05/Google-Docs-logo.jpg`} className='img-fluid'/> : null
                    }
                    <div className="card-body">
                      <h6 className="text-center text-success text-capitalize"> { item.info ? item.info.name  : null} </h6>
                    </div>
                  </div>
                {/* </NavLink> */}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home