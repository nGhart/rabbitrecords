import React, { useState } from 'react';
import './chat.scss';
import OpenAI from 'openai';
import { Textarea, Spinner } from '@chakra-ui/react';

const Chat = () => {
  const openai = new OpenAI({
    apiKey: `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`,
    dangerouslyAllowBrowser: true,
  });

  const [toggleMenu, setToggleMenu] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
    console.log('first');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 1,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      setApiResponse(response.choices[0].message.content);
    } catch (error) {
      console.log(error);
      setApiResponse(error.message);
    }
    setLoading(false);
  };
  return (
    <>
      <button className="toggle">
        <i
          className={`${
            toggleMenu ? 'fas fa-angle-down arrow' : 'fas fa-question arrow'
          }`}
          onClick={() => {
            handleToggle();
          }}
        ></i>
      </button>
      <div
        className={`${
          toggleMenu ? 'toggleContainer showChat' : 'toggleContainer'
        }`}
      >
        <div style={{ height: '100%' }}>
          <div className="chatbox">
            <div
              className="response  homeBack"
              style={{ maxWidth: '320px', minWidth: '320px' }}
            >
              {apiResponse && (
                <div style={{ whiteSpace: 'pre-line' }}>
                  {apiResponse.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                padding: '0 15px',
                //marginBottom: '15px',
              }}
            >
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="What can I help you with?"
                type="text"
                size="sm"
                style={{
                  width: '85%',
                  //textAlign: 'center',
                  padding: '5px',
                  border: '2px solid rgb(31, 161, 133)',
                }}
              />
              <button
                className="goButton"
                disabled={loading || prompt.length === 0}
                type="submit"
              >
                {loading ? '...' : 'GO'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
