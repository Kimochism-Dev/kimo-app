import {
  Button,
  Spinner,
  Toggle,
  Badge,
  Card,
  Input,
  Avatar,
  Skeleton,
  Flex,
} from "@/components/ui";
import Image from "next/image";

export default function Sandbox() {
  return (
    <Flex outline column alignStart gap="g-1">
      <h1>【気持ち】 Sandbox Kimo</h1>
      <Flex row alignStart outline={false} padding="p-0">
        <Card title="Card Title" footer="Card Footer">
          <Image
            src="https://i.pinimg.com/564x/cb/93/d9/cb93d99daa4e28a069ca2b7a104a5df3.jpg"
            width={"300"}
            height={"300"}
            alt="children"
          />
        </Card>
        <Avatar image="https://i.pinimg.com/564x/c3/2e/bf/c32ebff3a876a48ca48859689222fe13.jpg" />
        <Spinner />
        <Input placeholder="Design Kit Sandbox" />
        <div className="flex g-1">
          <Badge label="Badge" variant="secondary" />
          <Badge label="Badge Two" variant="primary" />
        </div>
        <Button label="Adicionar ao carrinho" variant="secondary" />
        <Button label="Remover do carrinho" />
        <Toggle checked={true} />
        <Toggle checked={false} />
      </Flex>
      <h1>Flex Commons</h1>

      <Flex outline alignStart>
        <Flex outline>
          <span>flex</span>
          <span>default</span>
        </Flex>
        <Flex outline column>
          <span>flex</span>
          <span>column</span>
        </Flex>
        <Flex outline columnReverse>
          <span>flex</span>
          <span>reverse</span>
          <span>column</span>
        </Flex>
        <Flex outline row>
          <span>flex</span>
          <span>row</span>
        </Flex>
        <Flex outline rowReverse>
          <span>flex</span>
          <span>row</span>
          <span>reverse</span>
        </Flex>
      </Flex>

      <Flex>
        <Flex outline alignCenter>
          <span>flex</span>
          <span>align</span>
          <span>Center</span>
        </Flex>
        <Flex outline alignEnd>
          <span>flex</span>
          <span>align</span>
          <span>end</span>
        </Flex>
        <Flex outline alignStart>
          <span>flex</span>
          <span>align</span>
          <span>start</span>
        </Flex>
      </Flex>

      <Flex outline full>
        <span>Flex full</span>
        <Flex outline justifyCenter full>
          <span>flex</span>
          <span>justify</span>
          <span>Center</span>
        </Flex>
        <Flex outline justifyEnd full>
          <span>flex</span>
          <span>justify</span>
          <span>end</span>
        </Flex>
        <Flex outline justifyStart full>
          <span>flex</span>
          <span>justify</span>
          <span>start</span>
        </Flex>
      </Flex>
      <h1>Skeletons Types</h1>
      <div className="flex align-start wrap g-1">
        {/* Example Type 1 */}
        <Skeleton
          avatar={true}
          lines={true}
          linesQuant={1}
          cards={true}
          cardsQuant={1}
          directionContainer="row"
        />
        {/* Example Type 2 */}
        <Skeleton
          avatar={false}
          lines={true}
          linesQuant={2}
          cards={true}
          cardsQuant={1}
        />
        {/* Example Type 3 */}
        <Skeleton
          avatar={true}
          lines={false}
          linesQuant={0}
          cards={true}
          cardsQuant={1}
          directionContainer="column-reverse"
        />
        {/* Example Type 4 */}
        <Skeleton
          avatar={false}
          lines={false}
          linesQuant={0}
          cards={true}
          cardsQuant={2}
          directionBody="row"
          directionContainer="row"
        />
        {/* Example Type 5 */}
        <Skeleton
          avatar={false}
          lines={false}
          linesQuant={0}
          cards={true}
          cardsQuant={1}
        />
        {/* Example Type 6 */}
        <Skeleton
          avatar={true}
          lines={true}
          linesQuant={3}
          cards={false}
          cardsQuant={0}
        />
        {/* Example Type 7 */}
        <Skeleton
          avatar={true}
          lines={true}
          linesQuant={3}
          cards={false}
          cardsQuant={0}
          directionContainer="column-reverse"
        />
        {/* Example Type 9 */}
        <Skeleton
          avatar={false}
          lines={true}
          linesQuant={3}
          cards={false}
          cardsQuant={0}
        />
        {/* Example Type 10 */}
        <Skeleton
          avatar={false}
          lines={false}
          linesQuant={0}
          cards={true}
          cardsQuant={2}
        />
      </div>
    </Flex>
  );
}
