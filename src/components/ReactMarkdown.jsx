import React, { useState } from 'react';

const ReactMarkdown = () => {
    const [markdown, setMarkdown] = useState('');

    const updateDownloadLink = () => {
     
      const blob = new Blob([markdown], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
  
   
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = 'markdown.txt';
  
    
      document.body.appendChild(downloadLink);
      setTimeout(() => {
          downloadLink.click();
          document.body.removeChild(downloadLink);
          URL.revokeObjectURL(url);
      }, 100);
  };
  

    return (
        <div>
            <div className='title'>
                <h1>Éditeur Markdown</h1>
                <p>Vous pouvez saisir des balises HTML également</p>
            </div>
            <div className='container'>
                <textarea
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                    className='textarea'
                ></textarea>
                <div className='output'>{markdown}</div>
            </div>
            <button className='button' onClick={updateDownloadLink} >
                Télécharger le texte
            </button>
        </div>
    );
};

export default ReactMarkdown;
