import DoneIcon from '@mui/icons-material/Done';
import { Chip } from '@mui/material';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import CheckIcon from '@mui/icons-material/Check';

function Payment(){



    const onToken = (token)=>{
        console.log(token);
      localStorage.setItem("payment", 200);
    }

    return(
        <div >
            {localStorage.getItem("payment") != 200 ? 
            <>
            <StripeCheckout
            token={onToken}
            name="pay 200"
            // currency="Inr"
            stripeKey="pk_test_51Lq9QZSFVWSI4lM8nP40fV4QvjvFrOCFiOrG8sv7hXFTDAkQqZMCofn9E6mWODZAr11XeGQzuy5pkpdGxVqigEdj00jrwx8FPq"
          />  
          </>
          :
            <>
             <Chip
        label="paid 200"
        color="success"
        variant="outlined" 
      />
            </>    }
     </div>
    )
}


export default Payment;