   const input = document.querySelector('#phone');
      window.intlTelInput(input, {
        loadUtils: () =>
          import(
            'https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.0/build/js/utils.js'
          ),
      });

