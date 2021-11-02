const statusp = document.querySelector('#status');
const connectBtn = document.querySelector('#connectBtn');
const checkoutBtn = document.querySelector('#checkoutBtn');

connectBtn.addEventListener('click', async () => {
    if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
        await ethereum.enable();
        initPayButton()
        statusp.innerHTML = 'Wallet connected. Mint your Divine Anarchy NFTs now!'
      } catch (err) {
        console.log(err)
        statusp.innerHTML = 'Wallet access denied'
      }
    } else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider)
      initPayButton()
    } else {
      statusp.innerHTML = 'No Metamask (or other Web3 Provider) installed';
    }
  })
  const initPayButton = () => {
    checkoutBtn.addEventListener('click', async () => {
      statusp.innerText = 'Minting in progress....'
      // paymentAddress is where funds will be send to
      const paymentAddress = '0x7054D4de267F16e9289e73C85471493cD2d64043'
      let totalEth = document.querySelector('#totalETH').innerText;
      web3.eth.sendTransaction({
        from: web3.eth.accounts[0],
        to: paymentAddress,
        value: web3.toWei(totalEth, 'ether')
        }, (err, transactionId) => {
        if  (err) {
          console.log('Minting failed', err)
          statusp.innerText = 'Minting failed'
        } else {
          console.log('Minting succeed', transactionId)
          statusp.innerText = 'Minting succeed';
          checkoutBtn.innerText = 'Mint again?'  
        }
      })
    })
  }