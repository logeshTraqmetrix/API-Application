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