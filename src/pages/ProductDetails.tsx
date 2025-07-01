import { useParams, useNavigate } from 'react-router';

function ProductDetails() {
    const params = useParams();
    const navigate = useNavigate();

    return <div>ProductDetails {params.id}</div>
}

export default ProductDetails;