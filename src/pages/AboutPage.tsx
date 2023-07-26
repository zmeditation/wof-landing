import React, { useEffect, useState} from 'react';
import '../style.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import PageHeader from '../components/PageHeader';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CompanyBox from '../components/CompanyBox';
import Button from '@mui/material/Button';
import ContactForm from '../components/ContactForm';
import PageFooter from '../components/PageFooter';

const PageHeaderContentBox = styled(Box)(({ theme }) => ({
    height: 'calc(80vh - calc(clamp(max(60px,5vh),10vw,min(150px,20vh))) - clamp(max(37.5px,3.125vh),6.25vw,min(120px,12.5vh)))',
    padding:'calc(clamp(max(60px,5vh),10vw,min(150px,20vh))) 0 calc(clamp(max(60px,5vh),10vw,min(150px,20vh)))',
    display:'flex',
    alignItems:'center',
    minHeight:'280px',
   
    [theme.breakpoints.down(950)]: {
      height: 'calc(100vh - 174px - calc(clamp(max(60px,5vh),10vw,min(150px,20vh))) - clamp(max(37.5px,3.125vh),6.25vw,min(120px,12.5vh)));',
      minHeight:'395px',
    },
}));

const HeaderContentLink = styled(Link)(({ theme }) => ({
    fontWeight:'700',
    color:'black',
    display:'inline-flex',
  
    '&:hover': {
      '& 	span:nth-child(1)': {
        display:'inline-block', 
        transform:'rotate(9deg)'
      },
      '& 	span:nth-child(2)': {
        display:'inline-block', 
        transform:'rotate(3deg)'
      },
      '& 	span:nth-child(3)': {
        display:'inline-block', 
        transform:'rotate(-3deg)'
      },
      '& 	span:nth-child(4)': {
        display:'inline-block', 
        transform:'rotate(6deg)'
      },
      '& 	span:nth-child(5)': {
        display:'inline-block', 
        transform:'rotate(3deg)'
      },
      '& 	span:nth-child(6)': {
        display:'inline-block', 
        transform:'rotate(9deg)'
      },
      '& 	span:nth-child(7)': {
        display:'inline-block', 
        transform:'rotate(-6deg)'
      },
      '& 	span:nth-child(8)': {
        display:'inline-block', 
        transform:'rotate(6deg)'
      },
      '& 	span:nth-child(9)': {
        display:'inline-block', 
        transform:'rotate(3deg)'
      },
      '& 	span:nth-child(10)': {
        display:'inline-block', 
        transform:'rotate(-9deg)'
      },
      '& 	span:nth-child(11)': {
        display:'inline-block', 
        transform:'rotate(3deg)'
      },
    },
}));

const CompanyTypo = styled(Typography)(({ theme }) => ({
    textAlign:"center", 
    fontWeight:"300",
    fontSize:"clamp(28px,3.33vw,60px)",
    fontFamily: 'Nunito Sans',   
    lineHeight:'112.02%',
  
    [theme.breakpoints.down('sm')]: {
      textAlign:'center',
    }
}));

const CompanyButtonBox = styled(Box)(({ theme }) => ({
    paddingBottom:'14px',
    paddingLeft: '40px',
    paddingRight: '40px',
}));

const PartnerBox = styled(Box)(({ theme }) => ({
  width: '61%',

  [theme.breakpoints.down(950)]: {
    width: '100%',
  }
}));

const ResponsiveBoxGmailInfo = styled(Box)(({ theme }) => ({
  justifyContent:'space-between',
  display:'flex',
  maxWidth:'94%',
  minHeight:'160px',
  alignItems:'center',
  margin:'auto',

  [theme.breakpoints.down(950)]: {
    textAlign:'left',
    padding:'unset',
    flexDirection:'column',
    alignItems:'flex-start',
    margin:'unset'
  }
}));

const ResponsiveBoxGmailInfoRight = styled(Box)(({ theme }) => ({
  textAlign:'right',

  [theme.breakpoints.down(950)]: {
    display:'block',
    textAlign:'left',
    marginTop:'30px'
  }
}));

const ResponsiveGmailInfoButton = styled(Button)(({ theme }) => ({
  fontSize:'clamp(20px,2.5vw,28px)', 
  fontWeight:'400', 
  color:'white',
  paddingLeft:'unset',
  paddingRight:'unset',
  textTransform:'unset',
  fontFamily:'Nunito Sans',
  backgroundColor: 'transparent !important',

  [theme.breakpoints.down(950)]: {
    display:'block',
    textAlign:'left',
  }
}));

const scrollToContact = () => {
    const contactElement = document.getElementById('contactId');
    if (contactElement) {
      const { top } = contactElement.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      window.scrollTo({
        top: scrollPosition + top ,
        behavior: 'smooth',
      });
    }
};

const contactObject = { id: 'contactId' };

const AboutPage = () => {
    const [copyEmail1, setCopyEmail1] = useState('holla@controltheory.io');
    const [copyEmail2, setCopyEmail2] = useState('work@controltheory.io');

    const copyingEmail1 = () => {
      navigator.clipboard.writeText(copyEmail1);
      setCopyEmail1('Copied');
      setTimeout(() => {
        setCopyEmail1('holla@controltheory.io');
      }, 800);
    }

    const copyingEmail2 = () => {
      navigator.clipboard.writeText(copyEmail2);
      setCopyEmail2('Copied');
      setTimeout(() => {
        setCopyEmail2('work@controltheory.io');
      }, 800);
    }

    return(
        <div>
            <Box sx={{minHeight:'80vh', width:'100%'}}>
            <Box>
              <PageHeader />
            </Box> 
            <PageHeaderContentBox className='pagesHeader'>
              <Box sx={{margin:'auto'}}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: 'clamp(720px,65.5vw,90vw)',
                    margin: 'auto',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    width: "90vw"
                  }}
                >
                    <Typography style={{
                      textAlign:"center", 
                      fontSize:"clamp(28px,3.75vw,10vh)",
                      fontWeight:"400",
                      fontFamily: 'Nunito Sans',   
                      lineHeight:'112%'
                    }}>
                       Call it like it is. We are {` `}
                       <HeaderContentLink href='#' underline="none"> 
                          <span>m</span>
                          <span>a</span>
                          <span>r</span>
                          <span>k</span>
                          <span>e</span>
                          <span>t</span>
                          <span>e</span>
                          <span>r</span>
                          <span>s</span>
                          <span>,</span>
                        </HeaderContentLink> {` `}
                       <HeaderContentLink href='#' underline="none"> 
                          <span>d</span>
                          <span>e</span>
                          <span>s</span>
                          <span>i</span>
                          <span>g</span>
                          <span>n</span>
                          <span>e</span>
                          <span>r</span>
                          <span>s</span>
                          <span>,</span>
                       </HeaderContentLink> {` `}
                       <HeaderContentLink href='#' underline="none"> 
                          <span>w</span>
                          <span>r</span>
                          <span>i</span>
                          <span>t</span>
                          <span>e</span>
                          <span>r</span>
                          <span>s</span>
                          <span>,</span>
                       </HeaderContentLink> and {` `}
                       <HeaderContentLink href='#' underline="none"> 
                          <span>d</span>
                          <span>e</span>
                          <span>v</span>
                          <span>e</span>
                          <span>l</span>
                          <span>o</span>
                          <span>p</span>
                          <span>e</span>
                          <span>r</span>
                          <span>s</span>
                          <span>,</span>
                       </HeaderContentLink> Shaped by tech.
                    </Typography>
                </Box>
              </Box>
            </PageHeaderContentBox>
            </Box>
            <Box sx={{width:'100%', 
                   height:'57vw', 
                   minHeight:'400px', 
                   backgroundColor:'#586572',
                   display:'flex',
                   alignItems:'center',
                   }}>
            <Typography
              style={{margin:'auto', 
                      fontWeight:'400', 
                      color:'white',
                      fontFamily:'Nunito Sans', 
                      fontSize:'clamp(20px,2.5vw,42px)', 
                      textAlign:'center', 
                      width:'57.8%'}}
            >
                Lorem ipsum dolor sit amet, consectetur <span style={{fontWeight:'700'}}>adipiscing</span> elit 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
            </Box>
            <Box sx={{width:'100%', 
                   height:'45vw', 
                   minHeight:'400px', 
                   display:'flex',
                   alignItems:'center',
                   }}>
            <Typography
              style={{margin:'auto', 
                      fontWeight:'400', 
                      fontFamily:'Nunito Sans', 
                      fontSize:'clamp(20px,2.5vw,42px)', 
                      textAlign:'center', 
                      width:'57.8%'}}
            >
                Lorem ipsum dolor sit amet, consectetur <span style={{fontWeight:'700'}}>adipiscing</span>
                elit Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
            </Box>
            <CompanyButtonBox style={{
                backgroundImage:`url('partnerSectionBackground.png')`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'
            }}>
               <Box
                 sx={{
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center',
                   maxWidth: '1178px',
                   minHeight: '62px',
                   margin: 'auto',
                   paddingTop:'99px'
                 }}
               >
                   <CompanyTypo>
                      We work with <b>100+ brands</b> around Europe and the US, including:
                   </CompanyTypo>
               </Box>
               <PartnerBox
                 sx={{
                   margin:'auto',
                   maxWidth: '1178px',
                   marginTop: '103px'
                 }}
               >
                 <CompanyBox />
               </PartnerBox>
            </CompanyButtonBox>
            <Box
              sx={{
                backgroundColor:'#676767',
                paddingTop:'20px',
                paddingLeft: '40px',
                paddingRight: '40px',
                paddingBottom:'20px'
              }}
            >
              <ResponsiveBoxGmailInfo>
                <Box>
                  <Typography style={{fontSize:'clamp(18px,1.25vw,21px)', fontWeight:'400', color:'white'}}>Our inbox is missing you:</Typography>
                  <ResponsiveGmailInfoButton onClick={copyingEmail1} disableRipple>{copyEmail1}</ResponsiveGmailInfoButton>
                </Box>
                <ResponsiveBoxGmailInfoRight>
                  <Typography style={{fontSize:'clamp(18px,1.25vw,21px)', fontWeight:'400', color:'white'}}>Apply for work:</Typography>
                  <ResponsiveGmailInfoButton onClick={copyingEmail2} disableRipple>{copyEmail2}</ResponsiveGmailInfoButton>
                </ResponsiveBoxGmailInfoRight>
              </ResponsiveBoxGmailInfo>
            </Box>
            <ContactForm contactId={contactObject.id}/>
            <Box>
              <PageFooter />
            </Box>
        </div>
    )
}

export default AboutPage;