// import React, { useContext, useEffect, useState } from 'react'
// import axios from 'axios'
// import { MyContext } from '../../MyProvider'

// const Subscription = () => {
//     const { state } = useContext(MyContext)


//     const applyPlan = (planValue) => {

//         axios.post('/server/api_application_function/userApi', { email: state.email_id, planValue })
//             .then((response) => {
//                 console.log('response from creating api payment', response.data)
//             }).catch((error) => {
//                 console.log('error in api creation or payment', error)
//             })
//     }
//     return (
//         <div>

//             <div>
//                 <h2>Subscription Plan</h2>
//                 <div>
//                     <h2>Free</h2>
//                     <button onClick={() => applyPlan(0)}>Apply</button>
//                 </div>
//                 <div>
//                     <h2>2 Rupees</h2>
//                     <button onClick={() => applyPlan(2)}>Apply</button>
//                 </div>
//                 <div>
//                     <h2>10 rupees</h2>
//                     <button onClick={() => applyPlan(10)}>Apply</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Subscription






// import React, { useContext } from 'react'
// import axios from 'axios'
// import { MyContext } from '../../MyProvider'

// const SubscriptionPlan = () => {
//     const { state } = useContext(MyContext)

//     const styles = {
//         container: {
//             minHeight: '100vh',
//             backgroundColor: '#f5f5f5',
//             padding: '3rem 1rem',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center'
//         },
//         title: {
//             fontSize: '2.5rem',
//             fontWeight: 'bold',
//             color: '#333',
//             marginBottom: '2rem',
//             textAlign: 'center'
//         },
//         plansContainer: {
//             display: 'flex',
//             justifyContent: 'center',
//             gap: '1.5rem',
//             flexWrap: 'wrap',
//             maxWidth: '1200px',
//             width: '100%'
//         },
//         planCard: {
//             backgroundColor: 'white',
//             borderRadius: '12px',
//             boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//             padding: '2rem',
//             width: '300px',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             transition: 'transform 0.3s, box-shadow 0.3s'
//         },
//         recommendedPlanCard: {
//             border: '2px solid #3b82f6',
//             transform: 'scale(1.05)'
//         },
//         recommendedBadge: {
//             backgroundColor: '#3b82f6',
//             color: 'white',
//             padding: '0.25rem',
//             borderRadius: '0.25rem',
//             position: 'absolute',
//             top: '-10px',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             fontSize: '0.8rem'
//         },
//         planName: {
//             fontSize: '1.5rem',
//             fontWeight: 'bold',
//             color: '#333',
//             marginBottom: '1rem'
//         },
//         planPrice: {
//             fontSize: '2.5rem',
//             fontWeight: 'bold',
//             color: '#3b82f6',
//             marginBottom: '1rem'
//         },
//         featuresList: {
//             listStyle: 'none',
//             padding: '0',
//             width: '100%',
//             marginBottom: '1.5rem'
//         },
//         featureItem: {
//             display: 'flex',
//             alignItems: 'center',
//             marginBottom: '0.5rem',
//             color: '#555'
//         },
//         selectButton: {
//             width: '100%',
//             padding: '0.75rem',
//             borderRadius: '8px',
//             border: 'none',
//             fontWeight: 'bold',
//             cursor: 'pointer',
//             transition: 'background-color 0.3s'
//         },
//         standardButton: {
//             backgroundColor: '#3b82f6',
//             color: 'white'
//         },
//         defaultButton: {
//             backgroundColor: '#f3f4f6',
//             color: '#333'
//         }
//     }

//     const plans = [
//         {
//             name: 'Free',
//             price: 0,
//             features: ['Basic Access', 'Limited Features'],
//             recommended: false
//         },
//         {
//             name: 'Standard',
//             price: 2,
//             features: ['Basic Access', 'More Features', 'Standard Support'],
//             recommended: true
//         },
//         {
//             name: 'Premium',
//             price: 10,
//             features: ['Full Access', 'All Features', 'Priority Support', 'Advanced Tools'],
//             recommended: false
//         }
//     ]

//     const applyPlan = (planValue) => {
//         axios.post('/server/api_application_function/userApi', { email: state.email_id, planValue })
//             .then((response) => {
//                 console.log('response from creating api payment', response.data)
//             }).catch((error) => {
//                 console.log('error in api creation or payment', error)
//             })
//     }

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.title}>Choose Your Subscription Plan</h1>

//             <div style={styles.plansContainer}>
//                 {plans.map((plan, index) => (
//                     <div 
//                         key={index} 
//                         style={{
//                             ...styles.planCard,
//                             ...(plan.recommended ? styles.recommendedPlanCard : {}),
//                             ':hover': {
//                                 transform: 'scale(1.05)',
//                                 boxShadow: '0 10px 15px rgba(0,0,0,0.15)'
//                             }
//                         }}
//                     >
//                         {plan.recommended && (
//                             <div style={styles.recommendedBadge}>
//                                 Most Popular
//                             </div>
//                         )}

//                         <h2 style={styles.planName}>{plan.name}</h2>
//                         <div style={styles.planPrice}>
//                             ₹{plan.price}
//                             <span style={{fontSize: '0.5em', color: '#888', display: 'block'}}>per month</span>
//                         </div>

//                         <ul style={styles.featuresList}>
//                             {plan.features.map((feature, featureIndex) => (
//                                 <li key={featureIndex} style={styles.featureItem}>
//                                     ✓ {feature}
//                                 </li>
//                             ))}
//                         </ul>

//                         <button 
//                             onClick={() => applyPlan(plan.price)}
//                             style={{
//                                 ...styles.selectButton,
//                                 ...(plan.recommended ? styles.standardButton : styles.defaultButton)
//                             }}
//                         >
//                             Select Plan
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default SubscriptionPlan







// import React, { useContext } from 'react'
// import axios from 'axios'
// import { MyContext } from '../../MyProvider'

// const SubscriptionPlan = () => {
//     const { state } = useContext(MyContext)

//     const styles = {
//         container: {
//             fontFamily: "'Inter', Arial, sans-serif",
//             backgroundColor: '#f4f7fa',
//             minHeight: '100vh',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             padding: '2rem'
//         },
//         sectionTitle: {
//             fontSize: '2.5rem',
//             fontWeight: '700',
//             color: '#1a2b3c',
//             marginBottom: '2.5rem',
//             textAlign: 'center',
//             letterSpacing: '-0.5px'
//         },
//         plansContainer: {
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'stretch',
//             gap: '1.5rem',
//             maxWidth: '1200px',
//             width: '100%'
//         },
//         planCard: {
//             backgroundColor: 'white',
//             borderRadius: '16px',
//             boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
//             padding: '2.5rem',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             textAlign: 'center',
//             transition: 'all 0.3s ease',
//             position: 'relative',
//             border: '1px solid transparent',
//             width: '350px'
//         },
//         recommendedPlanCard: {
//             borderColor: '#4a90e2',
//             transform: 'scale(1.05)',
//             boxShadow: '0 15px 35px rgba(74,144,226,0.15)'
//         },
//         recommendedBadge: {
//             position: 'absolute',
//             top: '-12px',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             backgroundColor: '#4a90e2',
//             color: 'white',
//             padding: '0.3rem 1rem',
//             borderRadius: '20px',
//             fontSize: '0.8rem',
//             fontWeight: '600',
//             letterSpacing: '0.5px'
//         },
//         planName: {
//             fontSize: '1.8rem',
//             fontWeight: '600',
//             color: '#1a2b3c',
//             marginBottom: '1rem'
//         },
//         planPrice: {
//             fontSize: '2.5rem',
//             fontWeight: '700',
//             color: '#4a90e2',
//             marginBottom: '1.5rem',
//             display: 'flex',
//             alignItems: 'baseline',
//             gap: '0.5rem'
//         },
//         priceCurrency: {
//             fontSize: '1.2rem',
//             color: '#6b7280',
//             fontWeight: '500'
//         },
//         priceFrequency: {
//             fontSize: '0.9rem',
//             color: '#6b7280',
//             marginLeft: '0.5rem'
//         },
//         featuresList: {
//             listStyle: 'none',
//             padding: '0',
//             width: '100%',
//             marginBottom: '2rem'
//         },
//         featureItem: {
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginBottom: '0.75rem',
//             color: '#4b5563',
//             fontWeight: '400'
//         },
//         featureIcon: {
//             color: '#4a90e2',
//             marginRight: '0.75rem',
//             fontSize: '1.2rem'
//         },
//         selectButton: {
//             width: '100%',
//             padding: '0.75rem 1.5rem',
//             borderRadius: '8px',
//             border: 'none',
//             fontSize: '1rem',
//             fontWeight: '600',
//             cursor: 'pointer',
//             transition: 'all 0.3s ease',
//             letterSpacing: '0.5px'
//         },
//         standardButton: {
//             backgroundColor: '#4a90e2',
//             color: 'white',
//             boxShadow: '0 4px 6px rgba(74,144,226,0.2)',
//             ':hover': {
//                 backgroundColor: '#357abd',
//                 transform: 'translateY(-2px)'
//             }
//         },
//         defaultButton: {
//             backgroundColor: '#e5e7eb',
//             color: '#1f2937',
//             ':hover': {
//                 backgroundColor: '#d1d5db',
//                 transform: 'translateY(-2px)'
//             }
//         }
//     }

//     const plans = [
//         {
//             name: 'Free',
//             price: 0,
//             features: ['Basic Access', 'Limited Features', 'Community Support'],
//             recommended: false
//         },
//         {
//             name: 'Professional',
//             price: 2,
//             features: ['Enhanced Access', 'Priority Features', 'Email Support', 'Monthly Reports'],
//             recommended: true
//         },
//         {
//             name: 'Enterprise',
//             price: 10,
//             features: ['Full Access', 'Advanced Features', 'Dedicated Support', 'Custom Integrations'],
//             recommended: false
//         }
//     ]

//     const applyPlan = (planValue) => {
//         axios.post('/server/api_application_function/userApi', { email: state.email_id, planValue })
//             .then((response) => {
//                 console.log('response from creating api payment', response.data)
//             }).catch((error) => {
//                 console.log('error in api creation or payment', error)
//             })
//     }

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.sectionTitle}>Choose Your Plan</h1>

//             <div style={styles.plansContainer}>
//                 {plans.map((plan, index) => (
//                     <div 
//                         key={index} 
//                         style={{
//                             ...styles.planCard,
//                             ...(plan.recommended ? styles.recommendedPlanCard : {}),
//                             ':hover': {
//                                 boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
//                                 transform: 'translateY(-10px)'
//                             }
//                         }}
//                     >
//                         {plan.recommended && (
//                             <div style={styles.recommendedBadge}>
//                                 Most Popular
//                             </div>
//                         )}

//                         <h2 style={styles.planName}>{plan.name}</h2>
//                         <div style={styles.planPrice}>
//                             <span style={styles.priceCurrency}>₹</span>
//                             {plan.price}
//                             <span style={styles.priceFrequency}>/ month</span>
//                         </div>

//                         <ul style={styles.featuresList}>
//                             {plan.features.map((feature, featureIndex) => (
//                                 <li key={featureIndex} style={styles.featureItem}>
//                                     <span style={styles.featureIcon}>✓</span>
//                                     {feature}
//                                 </li>
//                             ))}
//                         </ul>

//                         <button 
//                             onClick={() => applyPlan(plan.price)}
//                             style={{
//                                 ...styles.selectButton,
//                                 ...(plan.recommended ? styles.standardButton : styles.defaultButton)
//                             }}
//                         >
//                             Select Plan
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default SubscriptionPlan







// import React, { useContext } from 'react'
// import axios from 'axios'
// import { MyContext } from '../../MyProvider'
// import { 
//     Box, 
//     Typography, 
//     Card, 
//     CardContent, 
//     Button, 
//     Container, 
//     Grid, 
//     Chip 
// } from '@mui/material'
// import { styled } from '@mui/material/styles'

// const SubscriptionPlan = () => {
//     const { state } = useContext(MyContext)

//     // Styled components for custom styling
//     const StyledCard = styled(Card)(({ theme, recommended }) => ({
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         textAlign: 'center',
//         position: 'relative',
//         transition: 'all 0.3s ease',
//         ...(recommended && {
//             border: `2px solid ${theme.palette.primary.main}`,
//             transform: 'scale(1)',
//             boxShadow: theme.shadows[12]
//         }),
//         '&:hover': {
//             transform: 'translateY(-10px)',
//             boxShadow: theme.shadows[16]
//         }
//     }))

//     const PriceTypography = styled(Typography)(({ theme }) => ({
//         fontWeight: 'bold',
//         color: theme.palette.primary.main,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'baseline',
//         gap: theme.spacing(0.5)
//     }))

//     const plans = [
//         {
//             name: 'Free',
//             price: 0,
//             features: ['Basic Access', 'Limited Features', 'Community Support'],
//             recommended: false
//         },
//         {
//             name: 'Professional',
//             price: 2,
//             features: ['Enhanced Access', 'Priority Features', 'Email Support', 'Monthly Reports'],
//             recommended: true
//         },
//         {
//             name: 'Enterprise',
//             price: 10,
//             features: ['Full Access', 'Advanced Features', 'Dedicated Support', 'Custom Integrations'],
//             recommended: false
//         }
//     ]

//     const applyPlan = (planValue) => {
//         axios.post('/server/api_application_function/userApi', { email: state.email_id, planValue })
//             .then((response) => {
//                 console.log('response from creating api payment', response.data)
//             }).catch((error) => {
//                 console.log('error in api creation or payment', error)
//             })
//     }

//     return (
//         <Container maxWidth="lg" sx={{ py: 4 }}>
//             <Typography 
//                 variant="h4" 
//                 component="h1" 
//                 gutterBottom 
//                 align="center" 
//                 sx={{ fontWeight: 'bold', mb: 4 }}
//             >
//                 Choose Your Subscription Plan
//             </Typography>

//             <Grid container spacing={3} justifyContent="center">
//                 {plans.map((plan, index) => (
//                     <Grid item xs={12} sm={4} key={index}>
//                         <StyledCard 
//                             recommended={plan.recommended ? 1 : 0}
//                             sx={{ 
//                                 width: '100%', 
//                                 maxWidth: 300,
//                                 mx: 'auto'
//                             }}
//                         >
//                             {plan.recommended && (
//                                 <Chip 
//                                     label="Most Popular" 
//                                     color="primary" 
//                                     size="small" 
//                                     sx={{ 
//                                         position: 'absolute', 
//                                         top: -10, 
//                                         left: '50%', 
//                                         transform: 'translateX(-50%)' 
//                                     }} 
//                                 />
//                             )}

//                             <CardContent sx={{ 
//                                 display: 'flex', 
//                                 flexDirection: 'column', 
//                                 alignItems: 'center', 
//                                 flexGrow: 1 
//                             }}>
//                                 <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
//                                     {plan.name}
//                                 </Typography>

//                                 <PriceTypography variant="h4" sx={{ mb: 2 }}>
//                                     ₹{plan.price}
//                                     <Typography variant="body2" color="text.secondary">
//                                         / month
//                                     </Typography>
//                                 </PriceTypography>

//                                 <Box component="ul" sx={{ 
//                                     listStyle: 'none', 
//                                     p: 0, 
//                                     mb: 3,
//                                     width: '100%' 
//                                 }}>
//                                     {plan.features.map((feature, featureIndex) => (
//                                         <Typography 
//                                             key={featureIndex} 
//                                             component="li" 
//                                             variant="body2"
//                                             sx={{ 
//                                                 py: 0.5, 
//                                                 display: 'flex', 
//                                                 alignItems: 'center', 
//                                                 justifyContent: 'center' 
//                                             }}
//                                         >
//                                             ✓ {feature}
//                                         </Typography>
//                                     ))}
//                                 </Box>

//                                 <Button 
//                                     variant={plan.recommended ? "contained" : "outlined"}
//                                     color="primary"
//                                     fullWidth
//                                     onClick={() => applyPlan(plan.price)}
//                                     sx={{ mt: 'auto' }}
//                                 >
//                                     Select Plan
//                                 </Button>
//                             </CardContent>
//                         </StyledCard>
//                     </Grid>
//                 ))}
//             </Grid>
//         </Container>
//     )
// }

// export default SubscriptionPlan














// import React, { useContext } from 'react'
// import axios from 'axios'
// import { MyContext } from '../../MyProvider'
// import { 
//     Box, 
//     Typography, 
//     Card, 
//     CardContent, 
//     Button, 
//     Container, 
//     Grid, 
//     Chip 
// } from '@mui/material'
// import { styled } from '@mui/material/styles'

// const SubscriptionPlan = () => {
//     const { state } = useContext(MyContext)

//     // Styled components for custom styling
//     const StyledCard = styled(Card)(({ theme, recommended }) => ({
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         textAlign: 'center',
//         position: 'relative',
//         borderRadius: theme.shape.borderRadius,
//         boxShadow: theme.shadows[4],
//         transition: 'all 0.3s ease',
//         ...(recommended && {
//             border: `2px solid ${theme.palette.primary.main}`,
//             transform: 'scale(1.05)',
//             boxShadow: theme.shadows[12]
//         }),
//         '&:hover': {
//             transform: 'translateY(-8px)',
//             boxShadow: theme.shadows[8]
//         }
//     }))

//     const PriceTypography = styled(Typography)(({ theme }) => ({
//         fontWeight: 'bold',
//         color: theme.palette.primary.main,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'baseline',
//         gap: theme.spacing(0.5),
//         fontSize: '1.5rem',
//         marginBottom: theme.spacing(2)
//     }))

//     const plans = [
//         {
//             name: 'Free',
//             price: 0,
//             features: ['Basic Access', 'Limited Features', 'Community Support'],
//             recommended: false
//         },
//         {
//             name: 'Professional',
//             price: 2,
//             features: ['Enhanced Access', 'Priority Features', 'Email Support', 'Monthly Reports'],
//             recommended: true
//         },
//         {
//             name: 'Enterprise',
//             price: 10,
//             features: ['Full Access', 'Advanced Features', 'Dedicated Support', 'Custom Integrations'],
//             recommended: false
//         }
//     ]

//     const applyPlan = (planValue) => {
//         axios.post('/server/api_application_function/userApi', { email: state.email_id, planValue })
//             .then((response) => {
//                 console.log('response from creating api payment', response.data)
//             }).catch((error) => {
//                 console.log('error in api creation or payment', error)
//             })
//     }

//     return (
//         <Container maxWidth="lg" sx={{ py: 6 }}>
//             <Typography 
//                 variant="h4" 
//                 component="h1" 
//                 gutterBottom 
//                 align="center" 
//                 sx={{ fontWeight: 'bold', mb: 4 }}
//             >
//                 Choose Your Subscription Plan
//             </Typography>

//             <Grid container spacing={3} justifyContent="center">
//                 {plans.map((plan, index) => (
//                     <Grid item xs={12} sm={4} key={index}>
//                         <StyledCard 
//                             recommended={plan.recommended ? 1 : 0}
//                             sx={{ 
//                                 width: '100%', 
//                                 maxWidth: 320,
//                                 mx: 'auto'
//                             }}
//                         >
//                             {plan.recommended && (
//                                 <Chip 
//                                     label="Most Popular" 
//                                     color="primary" 
//                                     size="small" 
//                                     sx={{ 
//                                         position: 'absolute', 
//                                         top: -12, 
//                                         left: '50%', 
//                                         transform: 'translateX(-50%)' 
//                                     }} 
//                                 />
//                             )}

//                             <CardContent sx={{ 
//                                 display: 'flex', 
//                                 flexDirection: 'column', 
//                                 alignItems: 'center', 
//                                 flexGrow: 1 
//                             }}>
//                                 <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: '600' }}>
//                                     {plan.name}
//                                 </Typography>

//                                 <PriceTypography variant="h4">
//                                     ₹{plan.price}
//                                     <Typography variant="body2" color="text.secondary">
//                                         / month
//                                     </Typography>
//                                 </PriceTypography>

//                                 <Box component="ul" sx={{ 
//                                     listStyle: 'none', 
//                                     p: 0, 
//                                     mb: 3,
//                                     width: '100%' 
//                                 }}>
//                                     {plan.features.map((feature, featureIndex) => (
//                                         <Typography 
//                                             key={featureIndex} 
//                                             component="li" 
//                                             variant="body2"
//                                             sx={{ 
//                                                 py: 0.5, 
//                                                 display: 'flex', 
//                                                 alignItems: 'center', 
//                                                 justifyContent: 'center' 
//                                             }}
//                                         >
//                                             ✓ {feature}
//                                         </Typography>
//                                     ))}
//                                 </Box>

//                                 <Button 
//                                     variant={plan.recommended ? "contained" : "outlined"}
//                                     color="primary"
//                                     fullWidth
//                                     onClick={() => applyPlan(plan.price)}
//                                     sx={{ mt: 'auto', py: 1.5 }}
//                                 >
//                                     Select Plan
//                                 </Button>
//                             </CardContent>
//                         </StyledCard>
//                     </Grid>
//                 ))}
//             </Grid>
//         </Container>
//     )
// }

// export default SubscriptionPlan








// import React, { useContext } from 'react'
// import axios from 'axios'
// import { MyContext } from '../../MyProvider'


// const Subscription = () => {
//     const { state } = useContext(MyContext)

//     const applyPlan = (planValue) => {

//         axios.post('/server/api_application_function/userApi', { email: state.email_id, planValue })
//             .then((response) => {
//                 console.log('response from creating api payment', response.data)
//             }).catch((error) => {
//                 console.log('error in api creation or payment', error)
//             })
//     }
//     return (
//         <div>
//             <h2>Subscription Plan</h2>
//             <div style={{
//                 display: 'flex',
//                 justifyContent: 'space-evenly',

//             }}>
//                 <div style={{
//                     border:'solid gray 1px',
//                     padding:'20px',
//                     borderRadius:'7px'
//                 }}>
//                     <h2>Free</h2>
//                     <div>Everything you needed to get started</div>
//                     <div>$0</div>
//                     <div>Start building</div>
//                     <div>No Payment required</div>
//                     <div>Free api key</div>
//                     <div>5 api call for each api</div>
//                     <button onClick={() => applyPlan(0)}>Get Started for free</button>
//                 </div>
//                 <div style={{
//                     border:'solid gray 1px',
//                     padding:'20px',
//                     borderRadius:'7px'
//                 }}>
//                     <h2>Standard</h2>
//                     <div>Scale Your Application</div>
//                     <div>$2</div>
//                     <div>Start building</div>
//                     <div>No Payment required</div>
//                     <div>Free api key</div>
//                     <div>5 api call for each api</div>
//                     <button onClick={() => applyPlan(0)}>Upgrade to pro</button>
//                 </div>
//                 <div>
//                     <h2>Professional</h2>
//                     <button onClick={() => applyPlan(10)}>Apply</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Subscription








// import React, { useContext } from 'react';
// import axios from 'axios';
// import { MyContext } from '../../MyProvider';

// const Subscription = () => {
//   const { state } = useContext(MyContext);

//   const applyPlan = (planValue) => {
//     axios
//       .post('/server/api_application_function/userApi', { email: state.email_id, planValue })
//       .then((response) => {
//         console.log('response from creating api payment', response.data);
//       })
//       .catch((error) => {
//         console.log('error in api creation or payment', error);
//       });
//   };

//   return (
//     <div style={{
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '20px',
//       fontFamily: 'Arial, sans-serif',
//     }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Subscription Plan</h2>

//       <div
//         style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           gap: '20px',
//           justifyContent: 'center',
//         }}
//       >
//         {/* Free Plan */}
//         <div className="plan-card">
//           <h2>Free</h2>
//           <div>Everything you needed to get started</div>
//           <div className="price">&#8377;0</div>
//           <ul className="features">
//             <li>Start building</li>
//             <li>No Payment required</li>
//             <li>Free API key</li>
//             <li>5 API calls for each API</li>
//           </ul>
//           <button className="plan-button" onClick={() => applyPlan(0)}>
//             Get Started for Free
//           </button>
//         </div>

//         {/* Standard Plan */}
//         <div className="plan-card">
//           <h2>Standard</h2>
//           <div>Scale Your Application</div>
//           <div className="price">&#8377;150</div>
//           <ul className="features">
//             <li>Start building</li>
//             <li>No Payment required</li>
//             <li>Free API key</li>
//             <li>Unlimited API calls</li>
//           </ul>
//           <button className="plan-button" onClick={() => applyPlan(150)}>
//             Upgrade to Standard
//           </button>
//         </div>

//         {/* Professional Plan */}
//         <div className="plan-card">
//           <h2>Professional</h2>
//           <div>Unlock advanced features</div>
//           <div className="price">&#8377;500</div>
//           <ul className="features">
//             <li>High performance APIs</li>
//             <li>Priority support</li>
//             <li>Custom solutions</li>
//           </ul>
//           <button className="plan-button" onClick={() => applyPlan(500)}>
//             Go Professional
//           </button>
//         </div>
//       </div>

//       <style>{`
//         .plan-card {
//           border: 1px solid #ddd;
//           border-radius: 8px;
//           padding: 20px;
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//           text-align: center;
//           transition: transform 0.3s, box-shadow 0.3s;
//           flex: 1 1 calc(30% - 20px);
//           min-width: 280px;
//           background-color: #fff;
//         }

//         .plan-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//         }

//         .plan-card h2 {
//           color: #333;
//           margin-bottom: 10px;
//         }

//         .price {
//           font-size: 24px;
//           font-weight: bold;
//           color: #28a745;
//           margin: 10px 0;
//         }

//         .features {
//           list-style: none;
//           padding: 0;
//           margin: 10px 0 20px;
//         }

//         .features li {
//           margin: 5px 0;
//           font-size: 14px;
//           color: #555;
//         }

//         .plan-button {
//           background-color: #007bff;
//           color: #fff;
//           border: none;
//           border-radius: 5px;
//           padding: 10px 15px;
//           font-size: 14px;
//           cursor: pointer;
//           transition: background-color 0.3s;
//         }

//         .plan-button:hover {
//           background-color: #0056b3;
//         }

//         @media (max-width: 768px) {
//           .plan-card {
//             flex: 1 1 100%;
//             margin-bottom: 20px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Subscription;







// import React, { useContext, useState } from "react";
// import axios from "axios";
// import { MyContext } from "../../MyProvider";
// import { Box, Grid, Card, CardContent, Typography, Button } from "@mui/material";


// const Subscription = () => {

//   const { state } = useContext(MyContext)

//   const [enableFree,setEnableFree] = useState(false)

//   if (state.apiData == '' || state.apiData.freeTrail == false) {
//     setEnableFree(true)
//   }

//   const applyPlan = (planValue) => {
//     let payload = {
//       email: state.loginData.email_id,
//       planValue,
//     }

//     console.log('subscription payload', payload)
//     axios
//       .post("/server/api_application_function/userApi", payload)
//       .then((response) => {
//         console.log("response from creating api payment", response.data);
//       })
//       .catch((error) => {
//         console.log("error in api creation or payment", error);
//       });
//   };

//   return (
//     <Box
//       sx={{
//         maxWidth: "1200px",
//         margin: "0 auto",
//         padding: "20px",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       {/* Title */}
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         sx={{ fontWeight: "bold", color: "#333" }}
//       >
//         Subscription Plans
//       </Typography>

//       {/* Cards Grid */}
//       <Grid container spacing={3} justifyContent="center">
//         {/* Free Plan */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             elevation={3}
//             sx={{
//               textAlign: "center",
//               borderRadius: 2,
//               transition: "transform 0.3s",
//               "&:hover": { transform: "translateY(-10px)" },
//             }}
//           >
//             <CardContent>
//               <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                 Free
//               </Typography>
//               <Typography color="textSecondary" sx={{ mb: 2 }}>
//                 Everything you need to get started
//               </Typography>
//               <Typography variant="h6" color="success.main" gutterBottom>
//                 ₹0
//               </Typography >
//               <Box sx={{
//                 display: 'flex',
//                 justifyContent: 'center'
//               }}>
//                 <ul style={{ listStyle: "none", padding: 0, margin: "10px 0", textAlign: 'left' }}>
//                   <li>✅ Start building</li>
//                   <li>✅ No payment required</li>
//                   <li>✅ Free API key</li>
//                   <li>✅ 5 API calls for each API</li>
//                 </ul>
//               </Box>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => applyPlan(0)}
//               >
//                 Get Started for Free
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Standard Plan */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             elevation={3}
//             sx={{
//               textAlign: "center",
//               borderRadius: 2,
//               transition: "transform 0.3s",
//               "&:hover": { transform: "translateY(-10px)" },
//             }}
//           >
//             <CardContent>
//               <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                 Standard
//               </Typography>
//               <Typography color="textSecondary" sx={{ mb: 2 }}>
//                 Scale Your Application
//               </Typography>
//               <Typography variant="h6" color="success.main" gutterBottom>
//                 ₹5
//               </Typography>
//               <Box sx={{
//                 display: 'flex',
//                 justifyContent: 'center'
//               }}>
//                 <ul style={{ listStyle: "none", padding: 0, margin: "10px 0", textAlign: 'left' }}>
//                   <li>✅ Start building</li>
//                   <li>✅ No payment required</li>
//                   <li>✅ Free API key</li>
//                   <li>✅ 10 API calls</li>
//                 </ul>
//               </Box>

//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => applyPlan(2)}
//               >
//                 Upgrade to Standard
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Professional Plan */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             elevation={3}
//             sx={{
//               textAlign: "center",
//               borderRadius: 2,
//               transition: "transform 0.3s",
//               "&:hover": { transform: "translateY(-10px)" },
//             }}
//           >
//             <CardContent>
//               <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                 Professional
//               </Typography>
//               <Typography color="textSecondary" sx={{ mb: 2 }}>
//                 Unlock advanced features
//               </Typography>
//               <Typography variant="h6" color="success.main" gutterBottom>
//                 ₹10
//               </Typography>
//               <Box sx={{
//                 display: 'flex',
//                 justifyContent: 'center'
//               }}>
//                 <ul style={{ listStyle: "none", padding: 0, margin: "10px 0", textAlign: 'left' }}>
//                   <li>✅ Start building</li>
//                   <li>✅ No payment required</li>
//                   <li>✅ Free API key</li>
//                   <li>✅ 15 API calls</li>
//                 </ul>
//               </Box>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => applyPlan(10)}
//               >
//                 Go Professional
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Subscription;









// import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { MyContext } from "../../MyProvider";
// import { Box, Grid, Card, CardContent, Typography, Button, Snackbar } from "@mui/material";

// const Subscription = () => {
//   const { state } = useContext(MyContext);
//   const [enableFree, setEnableFree] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar state
//   const [snackbarMessage, setSnackbarMessage] = useState(""); // Snackbar message

//   // Update enableFree when apiData changes
//   useEffect(() => {
//     if (state.apiData === "" || state.apiData.freeTrail === false) {
//       setEnableFree(true);
//     }
//   }, [state.apiData]); // Run this effect only when state.apiData changes

//   const applyPlan = (planValue) => {
//     let payload = {
//       email: state.loginData.email_id,
//       planValue,
//     };

//     console.log("subscription payload", payload);
//     axios
//       .post("/server/api_application_function/userApi", payload)
//       .then((response) => {
//         console.log("response from creating api payment", response.data);
//         // Show Snackbar on success
//         setSnackbarMessage("Subscription successful!");
//         setOpenSnackbar(true);
//       })
//       .catch((error) => {
//         console.log("error in api creation or payment", error);
//         // Show error Snackbar on failure
//         setSnackbarMessage("Something went wrong, please try again.");
//         setOpenSnackbar(true);
//       });
//   };

//   return (
//     <Box
//       sx={{
//         maxWidth: "1200px",
//         margin: "0 auto",
//         padding: "20px",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       {/* Title */}
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         sx={{ fontWeight: "bold", color: "#333" }}
//       >
//         Subscription Plans
//       </Typography>

//       {/* Cards Grid */}
//       <Grid container spacing={3} justifyContent="center">
//         {/* Free Plan */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             elevation={3}
//             sx={{
//               textAlign: "center",
//               borderRadius: 2,
//               transition: "transform 0.3s",
//               "&:hover": { transform: "translateY(-10px)" },
//             }}
//           >
//             <CardContent>
//               <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                 Free
//               </Typography>
//               <Typography color="textSecondary" sx={{ mb: 2 }}>
//                 Everything you need to get started
//               </Typography>
//               <Typography variant="h6" color="success.main" gutterBottom>
//                 ₹0
//               </Typography>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                 }}
//               >
//                 <ul style={{ listStyle: "none", padding: 0, margin: "10px 0", textAlign: "left" }}>
//                   <li>✅ Start building</li>
//                   <li>✅ No payment required</li>
//                   <li>✅ Free API key</li>
//                   <li>✅ 5 API calls for each API</li>
//                 </ul>
//               </Box>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => applyPlan(0)}
//                 disabled={!enableFree} // Enable button only if enableFree is true
//               >
//                 Get Started for Free
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Standard Plan */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             elevation={3}
//             sx={{
//               textAlign: "center",
//               borderRadius: 2,
//               transition: "transform 0.3s",
//               "&:hover": { transform: "translateY(-10px)" },
//             }}
//           >
//             <CardContent>
//               <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                 Standard
//               </Typography>
//               <Typography color="textSecondary" sx={{ mb: 2 }}>
//                 Scale Your Application
//               </Typography>
//               <Typography variant="h6" color="success.main" gutterBottom>
//                 ₹5
//               </Typography>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                 }}
//               >
//                 <ul style={{ listStyle: "none", padding: 0, margin: "10px 0", textAlign: "left" }}>
//                   <li>✅ Start building</li>
//                   <li>✅ No payment required</li>
//                   <li>✅ Free API key</li>
//                   <li>✅ 10 API calls</li>
//                 </ul>
//               </Box>

//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => applyPlan(2)}
//               >
//                 Upgrade to Standard
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Professional Plan */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             elevation={3}
//             sx={{
//               textAlign: "center",
//               borderRadius: 2,
//               transition: "transform 0.3s",
//               "&:hover": { transform: "translateY(-10px)" },
//             }}
//           >
//             <CardContent>
//               <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                 Professional
//               </Typography>
//               <Typography color="textSecondary" sx={{ mb: 2 }}>
//                 Unlock advanced features
//               </Typography>
//               <Typography variant="h6" color="success.main" gutterBottom>
//                 ₹10
//               </Typography>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                 }}
//               >
//                 <ul style={{ listStyle: "none", padding: 0, margin: "10px 0", textAlign: "left" }}>
//                   <li>✅ Start building</li>
//                   <li>✅ No payment required</li>
//                   <li>✅ Free API key</li>
//                   <li>✅ 15 API calls</li>
//                 </ul>
//               </Box>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => applyPlan(10)}
//               >
//                 Go Professional
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* Snackbar for subscription success or error */}
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={() => setOpenSnackbar(false)}
//         message={snackbarMessage}
//       />
//     </Box>
//   );
// };

// export default Subscription;









// import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useHistory for navigation
// import { MyContext } from "../../MyProvider";
// import { Box, Grid, Card, CardContent, Typography, Button, Snackbar } from "@mui/material";

// const Subscription = () => {
//   const { state } = useContext(MyContext);
//   const [enableFree, setEnableFree] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar state
//   const [snackbarMessage, setSnackbarMessage] = useState(""); // Snackbar message
//   const history = useNavigate(); // Use useHistory for navigation

//   // Update enableFree when apiData changes
//   useEffect(() => {
//     if (state.apiData === "" || state.apiData.freeTrail === false) {
//       setEnableFree(true);
//     }
//   }, [state.apiData]); // Run this effect only when state.apiData changes

//   const applyPlan = (planValue) => {
//     let payload = {
//       email: state.loginData.email_id,
//       planValue,
//     };

//     console.log("subscription payload", payload);
//     axios
//       .post("/server/api_application_function/userApi", payload)
//       .then((response) => {
//         console.log("response from creating api payment", response.data);
//         // Show Snackbar on success
//         setSnackbarMessage("Subscription successful!");
//         setOpenSnackbar(true);

//         // Reload the page and navigate to /home after success
//         setTimeout(() => {
//           history("/home"); // Navigate to /home
//           window.location.reload(); // Reload the page
        
//         }, 2000); // Give some time for Snackbar to be shown before redirect
//       })
//       .catch((error) => {
//         console.log("error in api creation or payment", error);
//         // Show error Snackbar on failure
//         setSnackbarMessage("Something went wrong, please try again.");
//         setOpenSnackbar(true);
//       });
//   };

//   return (
//     <Box
//       sx={{
//         maxWidth: "1200px",
//         margin: "0 auto",
//         padding: "20px",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       {/* Title */}
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         sx={{ fontWeight: "bold", color: "#333" }}
//       >
//         Subscription Plans
//       </Typography>

//       {/* Cards Grid */}
//       <Grid container spacing={3} justifyContent="center">
//         {/* Free Plan */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             elevation={3}
//             sx={{
//               textAlign: "center",
//               borderRadius: 2,
//               transition: "transform 0.3s",
//               "&:hover": { transform: "translateY(-10px)" },
//             }}
//           >
//             <CardContent>
//               <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                 Free
//               </Typography>
//               <Typography color="textSecondary" sx={{ mb: 2 }}>
//                 Everything you need to get started
//               </Typography>
//               <Typography variant="h6" color="success.main" gutterBottom>
//                 ₹0
//               </Typography>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                 }}
//               >
//                 <ul style={{ listStyle: "none", padding: 0, margin: "10px 0", textAlign: "left" }}>
//                   <li>✅ Start building</li>
//                   <li>✅ No payment required</li>
//                   <li>✅ Free API key</li>
//                   <li>✅ 5 API calls for each API</li>
//                 </ul>
//               </Box>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => applyPlan(0)}
//                 disabled={!enableFree} // Enable button only if enableFree is true
//               >
//                 {enableFree ? "Get Started for Free" : "You have used free tier"}
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Standard Plan */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             elevation={3}
//             sx={{
//               textAlign: "center",
//               borderRadius: 2,
//               transition: "transform 0.3s",
//               "&:hover": { transform: "translateY(-10px)" },
//             }}
//           >
//             <CardContent>
//               <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                 Standard
//               </Typography>
//               <Typography color="textSecondary" sx={{ mb: 2 }}>
//                 Scale Your Application
//               </Typography>
//               <Typography variant="h6" color="success.main" gutterBottom>
//                 ₹5
//               </Typography>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                 }}
//               >
//                 <ul style={{ listStyle: "none", padding: 0, margin: "10px 0", textAlign: "left" }}>
//                   <li>✅ Start building</li>
//                   <li>✅ No payment required</li>
//                   <li>✅ Free API key</li>
//                   <li>✅ 10 API calls</li>
//                 </ul>
//               </Box>

//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => applyPlan(2)}
//               >
//                 Upgrade to Standard
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Professional Plan */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             elevation={3}
//             sx={{
//               textAlign: "center",
//               borderRadius: 2,
//               transition: "transform 0.3s",
//               "&:hover": { transform: "translateY(-10px)" },
//             }}
//           >
//             <CardContent>
//               <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                 Professional
//               </Typography>
//               <Typography color="textSecondary" sx={{ mb: 2 }}>
//                 Unlock advanced features
//               </Typography>
//               <Typography variant="h6" color="success.main" gutterBottom>
//                 ₹10
//               </Typography>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                 }}
//               >
//                 <ul style={{ listStyle: "none", padding: 0, margin: "10px 0", textAlign: "left" }}>
//                   <li>✅ Start building</li>
//                   <li>✅ No payment required</li>
//                   <li>✅ Free API key</li>
//                   <li>✅ 15 API calls</li>
//                 </ul>
//               </Box>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => applyPlan(10)}
//               >
//                 Go Professional
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* Snackbar for subscription success or error */}
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={() => setOpenSnackbar(false)}
//         message={snackbarMessage}
//       />
//     </Box>
//   );
// };

// export default Subscription;








import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import { MyContext } from "../../MyProvider";
import { Box, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import Swal from "sweetalert2"; // Import SweetAlert2

const Subscription = () => {
  const { state } = useContext(MyContext);
  const [enableFree, setEnableFree] = useState(false);
  const history = useNavigate(); 

  // Update enableFree when apiData changes
  useEffect(() => {
    if (state.apiData === "" || state.apiData.freeTrail === false) {
      setEnableFree(true);
    }
  }, [state.apiData]);

  const applyPlan = (planValue) => {
    let payload = {
      email: state.loginData.email_id,
      planValue,
    };

    console.log("subscription payload", payload);
    axios
      .post("/server/api_application_function/userApi", payload)
      .then((response) => {
        console.log("response from creating api payment", response.data);
        // Show SweetAlert on success
        Swal.fire({
          title: "Subscription Successful!",
          text: "Your subscription was successful!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          // Navigate to /home and refresh the page once the user clicks OK
          history("/home");
          window.location.reload();
        });
      })
      .catch((error) => {
        console.log("error in api creation or payment", error);
        // Handle errors if needed
        Swal.fire({
          title: "Error!",
          text: "Something went wrong, please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#333" }}
      >
        Subscription Plans
      </Typography>

      {/* Cards Grid */}
      <Grid container spacing={3} justifyContent="center">
        {/* Free Plan */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            elevation={3}
            sx={{
              textAlign: "center",
              borderRadius: 2,
              transition: "transform 0.3s",
              "&:hover": { transform: "translateY(-10px)" },
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Free
              </Typography>
              <Typography color="textSecondary" sx={{ mb: 2 }}>
                Everything you need to get started
              </Typography>
              <Typography variant="h6" color="success.main" gutterBottom>
                ₹0
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ul style={{ listStyle: "none", padding: 0, margin: "10px 0", textAlign: "left" }}>
                  <li>✅ Start building</li>
                  <li>✅ No payment required</li>
                  <li>✅ Free API key</li>
                  <li>✅ 5 API calls for each API</li>
                </ul>
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => applyPlan(0)}
                disabled={!enableFree} 
              >
                {enableFree ? "Get Started for Free" : "You have used free tier"}
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Standard Plan */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            elevation={3}
            sx={{
              textAlign: "center",
              borderRadius: 2,
              transition: "transform 0.3s",
              "&:hover": { transform: "translateY(-10px)" },
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Standard
              </Typography>
              <Typography color="textSecondary" sx={{ mb: 2 }}>
                Scale Your Application
              </Typography>
              <Typography variant="h6" color="success.main" gutterBottom>
                ₹5
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ul style={{ listStyle: "none", padding: 0, margin: "10px 0", textAlign: "left" }}>
                  <li>✅ Start building</li>
                  <li>✅ No payment required</li>
                  <li>✅ Free API key</li>
                  <li>✅ 10 API calls</li>
                </ul>
              </Box>

              <Button
                variant="contained"
                color="primary"
                onClick={() => applyPlan(2)}
              >
                Upgrade to Standard
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Professional Plan */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            elevation={3}
            sx={{
              textAlign: "center",
              borderRadius: 2,
              transition: "transform 0.3s",
              "&:hover": { transform: "translateY(-10px)" },
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Professional
              </Typography>
              <Typography color="textSecondary" sx={{ mb: 2 }}>
                Unlock advanced features
              </Typography>
              <Typography variant="h6" color="success.main" gutterBottom>
                ₹10
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ul style={{ listStyle: "none", padding: 0, margin: "10px 0", textAlign: "left" }}>
                  <li>✅ Start building</li>
                  <li>✅ No payment required</li>
                  <li>✅ Free API key</li>
                  <li>✅ 15 API calls</li>
                </ul>
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => applyPlan(10)}
              >
                Go Professional
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Subscription;
