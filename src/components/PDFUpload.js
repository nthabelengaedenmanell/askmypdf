import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

function PDFUpload({ setSummary }) {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('pdf', file);

    axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      setSummary(response.data.summary);
    })
    .catch(error => {
      console.error('Error uploading PDF:', error);
    });
  }, [setSummary]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'application/pdf' });

  return (
    <div {...getRootProps()} className="dropzone" style={dropzoneStyle}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the PDF here ...</p> :
          <p>Drag 'n' drop a PDF here, or click to select files</p>
      }
    </div>
  );
}

const dropzoneStyle = {
  border: '2px dashed #2196f3',
  borderRadius: '5px',
  padding: '20px',
  textAlign: 'center',
  color: '#2196f3',
  margin: '20px',
  cursor: 'pointer'
};

export default PDFUpload;