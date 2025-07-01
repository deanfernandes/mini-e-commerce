import { useParams, useNavigate } from 'react-router';

function ProductDetails() {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <button className='btn btn-secondary' onClick={()=>navigate(-1)}>Back</button>
            {params.id}
        </div>
    )
}

export default ProductDetails;