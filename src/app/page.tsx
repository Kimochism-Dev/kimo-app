import { Button, Spinner, Toggle, Badge, Card, Input, Avatar, } from "@/lib/ui";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex column align-start gap-1">
      <h1>【気持ち】 Sandbox Kimo</h1>
      <Avatar image="https://i.pinimg.com/564x/c3/2e/bf/c32ebff3a876a48ca48859689222fe13.jpg"/>
      <Spinner/>
      <Input placeholder="Design Kit Sandbox"/>
      <div className="flex gap-1">
        <Badge label="Badge" variant="secondary"/>
        <Badge label="Badge Two" variant="primary"/>
      </div>
      <Button
        label="Adicionar ao carrinho"
        variant="secondary"
      />
      <Button
        label="Excluir"
      />
      <Toggle checked={true}/>
      <Toggle checked={false}/>
      <Card title="Card Title" footer="Card Footer">
        <Image src="https://i.pinimg.com/564x/cb/93/d9/cb93d99daa4e28a069ca2b7a104a5df3.jpg" width={'300'}
        height={'300'} alt="children"/>
      </Card>
    </div>
  );
}
