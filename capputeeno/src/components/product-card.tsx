import { formatPriceValue } from "@/utils/format-price"
import { useRouter } from "next/navigation";
import styled from "styled-components"
import { Divider } from "./divider";

interface ProductCardProps {
  image: string,
  title: string,
  price: number,
  id: string,
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;

  width: 256px;

  img {
    width: 256px;
    height: 300px;
  }

  h3{
    font-weight: 300;
    line-height: 24px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  p{
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    color: var(--shapes-dark);
  }
  div{
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 0;
    > div{
      width: 228px;
      height: 1px;
      margin: 8px 0;
      padding: 0px;
      background: var(--shapes);
    }
  }
`

export function ProductCard(props: ProductCardProps) {
  const price = formatPriceValue(props.price)
  const router = useRouter();
  
  const handleNavigate = () => {
    router.push(`product?id=${props.id}`)
  }

  return (
    <Card onClick={handleNavigate}>
      <img src={props.image} />
      <div>
        <h3>{props.title}</h3>
        <Divider />
        <p>{price}</p>
      </div>
    </Card>
  )
}