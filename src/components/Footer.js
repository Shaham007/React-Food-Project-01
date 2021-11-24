import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
            <LinkedInIcon />
            <InstagramIcon />
            <FacebookIcon />
            <p>
            &copy; Shaham Mazhar 2021
            </p>
            </div>
            
        </div>
    )
}
