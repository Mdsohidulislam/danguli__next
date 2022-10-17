import { useRouter } from "next/router";

    


const CompanyLogo = () => {
    
    const router = useRouter(); 

    const handleGoHome = () => {
        router.push('/');
    }

    return (
        <div className='logo__div search__bar__element'>
            <img src='/logo.png' className='img__logo' alt='store logo' onClick={handleGoHome}></img>
        </div>
    )
}

export default CompanyLogo;