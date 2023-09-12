const executeRecaptcha = async () => {
    return new Promise((resolve, reject) => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(process.env.REACT_APP_RECAPTCHA_SITE_KEY, {action: 'submit'}).then(token => {
            resolve(token);
          });
        });
      } else {
        reject("reCAPTCHA hasn't loaded");
      }
    });
  };


export default executeRecaptcha; 