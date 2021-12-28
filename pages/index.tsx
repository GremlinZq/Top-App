// Components
import {Button, Htag, Tag } from "../components";
import {Paragraph} from "../components";

const HomePage = () => {
    return (
        <>
            <Htag Tag='h3'>Курсы по Photoshop</Htag>
            <Button appearance='primary'>Узнать подробнее</Button>
            <Button appearance='ghost'>Узнать подробнее</Button>
            <Button>Узнать подробнее</Button>
            <Paragraph>2132131</Paragraph>
            <Paragraph size='average'>2132131</Paragraph>
            <Paragraph size='big'>2132131</Paragraph>
            <Tag href='213124'>123</Tag>
            <Tag bgColor='gray'>123</Tag>
            <Tag bgColor='green'>123</Tag>
            <Tag bgColor='primary'>123</Tag>
            <Tag bgColor='red'>123</Tag>
        </>
    );
};

export default HomePage;