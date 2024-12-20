// import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import axios from 'axios';

// const VisuallyHiddenInput = styled('input')({
//   clip: 'rect(0 0 0 0)',
//   clipPath: 'inset(50%)',
//   height: 1,
//   overflow: 'hidden',
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   whiteSpace: 'nowrap',
//   width: 1,
// });

// const StockDataUpload = () => {
//   const [file, setFile] = useState(null);

//   const handleFileUpload = async () => {
//     if (!file) {
//       alert('Please select a file first!');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post('/server/api_application_function/stockdata', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('File uploaded successfully:', response.data);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   return (
//     <div>
//       <Button
//         component="label"
//         role={undefined}
//         variant="contained"
//         tabIndex={-1}
//         startIcon={<CloudUploadIcon />}
//       >
//         Upload files
//         <VisuallyHiddenInput
//           type="file"
//           onChange={(event) => setFile(event.target.files[0])}
//         />
//       </Button>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleFileUpload}
//         style={{ marginTop: '10px' }}
//       >
//         Submit
//       </Button>
//     </div>
//   );
// };

// export default StockDataUpload;








// import React, { useRef, useState } from 'react';
// import { Toast } from 'primereact/toast';
// import { FileUpload } from 'primereact/fileupload';
// import { ProgressBar } from 'primereact/progressbar';
// import { Button } from 'primereact/button';
// import { Tooltip } from 'primereact/tooltip';
// import { Tag } from 'primereact/tag';

// export default function TemplateDemo() {
//     const toast = useRef(null);
//     const [totalSize, setTotalSize] = useState(0);
//     const fileUploadRef = useRef(null);

//     const onTemplateSelect = (e) => {
//         let _totalSize = totalSize;
//         let files = e.files;

//         Object.keys(files).forEach((key) => {
//             _totalSize += files[key].size || 0;
//         });

//         setTotalSize(_totalSize);
//     };

//     const onTemplateUpload = (e) => {
//         let _totalSize = 0;

//         e.files.forEach((file) => {
//             _totalSize += file.size || 0;
//         });

//         setTotalSize(_totalSize);
//         toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
//     };

//     const onTemplateRemove = (file, callback) => {
//         setTotalSize(totalSize - file.size);
//         callback();
//     };

//     const onTemplateClear = () => {
//         setTotalSize(0);
//     };

//     const headerTemplate = (options) => {
//         const { className, chooseButton, uploadButton, cancelButton } = options;
//         const value = totalSize / 10000;
//         const formattedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

//         return (
//             <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
//                 {chooseButton}
//                 {uploadButton}
//                 {cancelButton}
//                 <div className="flex align-items-center gap-3 ml-auto">
//                     <span>{formattedValue} / 1 MB</span>
//                     <ProgressBar value={value} showValue={false} style={{ width: '10rem', height: '12px' }}></ProgressBar>
//                 </div>
//             </div>
//         );
//     };

//     const itemTemplate = (file, props) => {
//         return (
//             <div className="flex align-items-center flex-wrap">
//                 <div className="flex align-items-center" style={{ width: '40%' }}>
//                     <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
//                     <span className="flex flex-column text-left ml-3">
//                         {file.name}
//                         <small>{new Date().toLocaleDateString()}</small>
//                     </span>
//                 </div>
//                 <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
//                 <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
//             </div>
//         );
//     };

//     const emptyTemplate = () => {
//         return (
//             <div className="flex align-items-center flex-column">
//                 <i className="pi pi-image mt-3 p-5" style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
//                 <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
//                     Drag and Drop Image Here
//                 </span>
//             </div>
//         );
//     };

//     const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
//     const uploadOptions = { icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined' };
//     const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };

//     return (
//         <div>
//             <Toast ref={toast}></Toast>

//             <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
//             <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
//             <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

//             <FileUpload ref={fileUploadRef} name="demo[]" url="/api/upload" multiple accept="image/*" maxFileSize={1000000}
//                 onUpload={onTemplateUpload} onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
//                 headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
//                 chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />
//         </div>
//     )
// }








import React, { useState } from 'react';
import { 
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  LinearProgress,
  Alert,
  Box,
} from '@mui/material';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [alert, setAlert] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 1000000) { // 1MB limit
        setAlert({
          type: 'error',
          message: 'File size exceeds 1MB limit'
        });
        return;
      }
      setFile(selectedFile);
      setAlert(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setAlert({
        type: 'error',
        message: 'Please select a file first'
      });
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 95) {
            clearInterval(interval);
            return prev;
          }
          return prev + 5;
        });
      }, 100);

      const response = await fetch('/server/api_application_function/stockdata', {
        method: 'POST',
        body: formData,
      });

      clearInterval(interval);
      setUploadProgress(100);

      if (response.ok) {
        setAlert({
          type: 'success',
          message: 'File uploaded successfully!'
        });
        setTimeout(() => {
          setFile(null);
          setUploadProgress(0);
        }, 2000);
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      setAlert({
        type: 'error',
        message: 'Error uploading file. Please try again.'
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      if (droppedFile.size > 1000000) {
        setAlert({
          type: 'error',
          message: 'File size exceeds 1MB limit'
        });
        return;
      }
      setFile(droppedFile);
      setAlert(null);
    }
  };

  return (
    <Card sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <CardHeader 
        title={
          <Typography variant="h6" component="h2">
            Upload Stock Data
          </Typography>
        }
      />
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {alert && (
            <Alert 
              severity={alert.type} 
              sx={{ mb: 2 }}
            >
              {alert.message}
            </Alert>
          )}

          <Box
            sx={{
              border: '2px dashed',
              borderColor: 'grey.300',
              borderRadius: 1,
              p: 4,
              textAlign: 'center',
              cursor: 'pointer',
              '&:hover': {
                borderColor: 'primary.main',
                bgcolor: 'grey.50'
              }
            }}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-input').click()}
          >
            <input
              id="file-input"
              type="file"
              hidden
              onChange={handleFileChange}
              accept=".csv,.xlsx,.xls"
            />
            <i className="pi pi-cloud-upload" style={{ fontSize: '3rem', marginBottom: '1rem', color: '#9e9e9e' }}></i>
            <Box>
              {file ? (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  <Typography variant="body1">{file.name}</Typography>
                  <Button
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFile(null);
                    }}
                    sx={{ minWidth: 'auto', p: 0.5 }}
                  >
                    <i className="pi pi-times" style={{ fontSize: '1rem' }}></i>
                  </Button>
                </Box>
              ) : (
                <>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Drop your file here or click to browse
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Maximum file size: 1MB
                  </Typography>
                </>
              )}
            </Box>
          </Box>

          {uploadProgress > 0 && (
            <Box sx={{ width: '100%' }}>
              <LinearProgress 
                variant="determinate" 
                value={uploadProgress} 
                sx={{ mb: 1 }}
              />
              <Typography 
                variant="body2" 
                color="text.secondary" 
                align="center"
              >
                {uploadProgress}% uploaded
              </Typography>
            </Box>
          )}

          <Button
            variant="contained"
            onClick={handleUpload}
            disabled={!file || uploading}
            fullWidth
            sx={{ mt: 2 }}
            startIcon={<i className="pi pi-upload"></i>}
          >
            {uploading ? 'Uploading...' : 'Upload File'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FileUpload;