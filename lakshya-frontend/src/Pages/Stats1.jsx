'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Image } from '@chakra-ui/react'
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'
// import Stats from './Stats';
import "./All.css";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        // color={'white'}
        // rounded={'full'}
        // bg={'gray.100'}
        // pb={"1px"}
      
      >
        {icon}
      </Flex>
      <Text  textAlign={"left"} w={"70%"} h={"140px"} fontWeight={480} fontSize={"24px"} >{title}</Text>
      <Text  w={"70%"} textAlign={"left"}color={'black.600'} fontWeight={520} fontSize={"16px"}>{text}</Text>
    </Stack>
  )
}

export default function Stats1() {
  return (
     <>
    <Box className='mainbody' p={4} h={"660px"} mt={"50px"}  gap={"40px"} display={"flex"}>
    {/* <h2 className='firsttext'>Why Choose GuruQ?</h2> */}
    <div  border={"1px solid red"}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} w={"70%"} h={"240px"} m={"auto"} mt={"50px"} display={"flex"} margin={"auto"} >
      
        <Feature 
          icon={<Icon as={"image/png;base64,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"} w={10} h={10} />}
          title={'India Largest Tutor Community'}
          text={
            'Select from 35000+ qualified tutors from across India.'
          }
        />
        <Feature
          icon={<Icon as={"image/png;base64,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"} w={10} h={10} />}
          title={'Online & Offline Tuitons'}
          text={
            'Choose your learning mode.'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Tutor Replacement'}
          text={
            'Free and instant tutor replacement in case of dissatisfaction.'
          }
        />
        <Feature
          icon={<Icon as={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABMCAMAAAAWYGpdAAAA5FBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADS4f8AAADQ3/3P3fvL2vfN3PnM2/jCz+vK2PXI1vO5x+HG1fG/zunD0e2sudHJ1/Syv9imscmirsWVoLXF0++0wdu8yuW2w92vvNWptc6eqsGPmq+YoriNl6uKk6d9hphyeouDjJ+AiZtob35J8LyIAAAAKHRSTlMABQgCDhEkDANSFNoeZTtyLBpsSjXp32BZRj8vJxbWv69UT/MXypx9F/7SYQAAA5BJREFUWMO9mGlX2kAUQCekKlAUlbrVWpduuZOEVVBxt3v7//9PmYEhDBlSm3B6P3iO8HJnSN68lxnxnyht7FcqlVM4rYxYLSDC5pVfVJTg5xdF7U47GtG+aHcYkUdUZkQczNAGXuScUj+wuIbNHKYXQGSbruB1DtMK0LZNj3CQc04XtmkAZ/8u8teAnm3qwt7a3xNhbavqW/c7bbpAUZq5ZrXmzXs8FNP1wJgwsOmjOEp+v8J3iGC9qidUSUQWEs2hUGy4Et9jykFJHKLoN2WQQsYtRjSE2Kxj2JhL517UQ7Nt5uMm1DF7jK+JlLkmDDVAqhEjJsQyWIjsMKavg84BzzwBtEkh9YgXGZ7kdsnkn1cTk/lYI5t6qGxkHzmNak8z4ygRPR9ppz7adACPQRFM4doCmkEhLnVSVYHLoBiRXh4NnTsFacEn8RG6QVEkvBUvQS7D9E7sLsm0I07gfBmmY1GBX72ipitYH5erp05GWLP7cNnK8nS/A0em8l1FgZubaxQ/bxdmwGdMc/bRuO/WOYaHwEX8iGLNKpnnTlHCvUuEppy0JOX6HBjsZuJ55bL3HugsGMluLzX4mg78Cpu+0GwCsdNUEhavYZiKa88V1ltnQanapn1XRbiFhtXdU8nQBLZs07ZrIV+bCm0q4sDVaFZtUx3uUqbvVtghDF2mN88wfbPCNuDxGXNah66zqpYzQ2LTNxNOXUkszdzNw4tcT/colQVXjkUH2yLVFTPzqbYO9+5y0VD54r3ZdmZmXzfghOoZI5qL1tX6/j4LAkL9vbnn3mES51aRBDhVnK2Yd9yMfh4akcx8c9kyolAurtFhC3pZARPVnvFkIGX21yFQFydqXRYlhOMl9rudQlNKius7cayravGG90Hd8S+FRS2o6yzoFv5tUDOv0IUYjDcKvi71Rbgxu9r38KOQaTjdcGDVpvgm+Dt3MyWol9So2T1hOHjGC2zzC3zruvbZq6aVh3coLmVmQrfQPN2YjSj+7KZs0AzDPoaOXOhpMuVhdE1k906PBG/iWiCaBHnMYG/EJ1TLRvtjGDsy5zcK3xrdEw5VyZphnBKheOELhb9iiazN+FpZiCzV/dyVXnWkLYtM/JIesJ1KQfylnIY8qWT+d6rp7j3Mf0ITFZyTfWpU/PypDFzLucpIKfc5nQzjUBGHsmXeuvKpbrEQOXnFHCsiL42TnZdvX44Y/d3drWeK/gCxiV1nEoQOqAAAAABJRU5ErkJggg=="} w={10} h={10} />}
          title={'100% Customized Classes'} 
          text={
            'Customize your classes  as per your learning need, schedule and budget.'
          }
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} w={"70%"} h={"240px"} m={"auto"} mt={"50px"}display={"flex"} margin={"auto"} >
      
      <Feature 
        icon={<Icon as={"image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABMCAMAAAD0vHEkAAACWFBMVEUAAADn5fLn5fIAAADn5fIAAAAAAADn5fIAAAABAAHn5fLn5fIAAAAAAADn5fLn5fLn5fLn5fIAAADY1uLn5fIAAAAAAAAAAADn5fIAAAABAQHn5fIAAAAAAADm5PEAAAAAAAAAAAAAAADn5fIAAAANDQ0EBAUvLzLOzNciIiQAAADn5fIAAADl4/AAAAAAAADn5fLn5fLMytUqKSzMytbn5fLk4u8AAADn5fIAAADn5fIAAADn5fIAAADn5fIAAAAjIyXn5fLn5fIAAADPztni4OzMytYnJynh3+sQEBCTkZqxr7mrqbPn5fLk4u/m5PEAAAAAAAAAAADn5fIAAADn5fIAAAAAAADc2ueVk5wHBwhfXmTIxtIjIiTBv8q7ucMyMTSVk5zg3uq0s72LiZF1dHq4tsHNy9axr7nn5fLKyNTj4e5vbnQAAADn5fLRz9uioarn5fJDQkaLiZFSUlbn5fLNy9YAAAAAAAAAAADn5fLn5fI1NDfn5fIAAAB8e4Ln5fIAAAAEBAXb2ebf3ekKCgri4e0ODQ4XFxnl4/AaGhwMDAwHBwgiIiQgHyEODg/d2+i5t8IxMDMVFRYTExRBQUQ2NjkcHB0QEBHk4u/h3+vRz9slJSebmqKPjpZvbnVoZ21OTVJNTFFHRkrY1uLT0d3Jx9PIxtLDwcy+vceoprB6eYF3dnxhYGVbW2BYV1w9PEAoJyoeHh/V09/Ny9fGxdCenaaVlJ2SkZmLiZFsa3FTU1dRUVVJSU1EQ0eioaqYl5+Hho2BgId9fIQ7Oj4tLS+ysbuUkptu3xwjAAAAgHRSTlMA/PpN9sS29QPI6t1aLQbw7eJQAvLyRfz4+NfSv7GraTUxIBAQDQr59+7t5ubBrY81Afz56tfRzcy7oX5zcF48Nh8ZBv387e3n19XNx7m2rqWfloeHaycV/Pz69fHx7uvo5OLi4eHe29fDwbStpqWel5Z4cXBqal5bVlJGQisoGvih+eIAAAZPSURBVFjDrZiFVxtBEIebcDRN0kICVCk1oO7u7u7u7u66v7sIIQkJWkopLXV3d++/1d27JHu5XIz2e6/v0c3jy83N7MwuzVIgo6A3GJlLuzX7VzIyoaJ184x/kjWHlqYLlw8A4+LDm4Txu9EJRhN9Ge1BeSwFXUTG45CkUlDGNckGSo1UR9QEJRFAQRNt5Q6iRXoKYGG6tjagSB4Si+MhgM5p6vozG9HFdRVATlq2HAC3SBxcFQAmpKMzA40kLg4A+9KwnQDgIPF5CbQ/n7quI/COJMIJDEgrra6EunJgRMq6AqCGJMQDoEWqut7ATZKYZ8DJVHUASBLeAR1TtHUHnMl0LqBtirpuQClJBoAUdV2BX0l1Ysq5mEAT+x91XYCK/6jrBpT9x3dXDHj/o64FICazfQUyUy3j9oAjia4ijY48CriRPBNT4ozm1trhnpM02ldAB13bUujMYjPwOqGuBFikXxQKzaNWxyXZtS8AdNHTjQE+ShLQOroJdAAeJ9AFgIJ4b/2+Tom3BEQpro1N7ja6ujFy9/DHpN2cINwfAFrq18QKAHJRdow9UwT0bQ/EBCXcAbin1wxpuHDf07FdpzZzq3i6xcBPQrxAjo7PWR1bIszWtVk8WgE+Qj4Ao5ppfW0B0f0kem85wWzJ5owDaB+7WwAm9F8N7YTrlc7kJ+RM4Achmrk5YWFfRBC9bnfA7XWKfKl3AS+UmHf0nJAyoHPsCbvmSgmiEa985mfu+N3tDdBRI2uUJMel4CeoeSZdoifkJ4mENKzLoVLhsrKXktLyHF9AySnKAOWaslYn3ayPK+wPfJLPRPSzFWPAuEFdYS5JoCwG5ZaLH/GkRjAGLNc5L3lpdbKuktGXyzjSRTCcyibmwo+gtM/QLRXWVXLkMKlMQ/ARS4vaFor5mfwiYkvlDyFQuM9lnLoveK+37igHYg6OnYF6Qp6DUqU5+/MX6NI/58kvYoROqTQA+Bwk6RJ8EuMD4CEusIDSp+6tdjZkyq382VXSJFzMdyp6n1WSF68fXGtwNMn3QJNflgSnTxR93muXCaeW7v0q/9OGOJZ3P/1Vbre3irjqoydbJhiiSP/VqgYsFHzOgP+hxnXVH3D6oKBcgxZFXzbrb0rSy4Z6+K5wnbpJPX8TWf9W6hVVH9GVO6rZNqUDXVP2gsvRCN9tle7gDITx1X5XHizgQ5gecxSdxwn05zOfXzYdv1Ct0nXKt9s3b+8BGbGqnNyvFUOmDTMtNuseRUduAb35DYwHSO5BvMt1/SztjEKexTp8Ti9Q/KQElF47Z5qMNrs1v9+BkI6IkWjbApe4zlOB71w3PM9gMBiNJpvFvmUIG/G1VDY3324TBNuw2RtXg3KR5ak6HG2xZuC/x2OuG5ltNNCfqFEwraW/SSqB3VZLdl62xTo7kozaqeQy0FfWFWnm/QN8UAXbR6A6hdtUx4LdkU3lNvs2UNyfP1YqvRCAkljN4fARHnHdfGteRDeYBst0Q9sRYrRtAv2vFHTUBaUb7IECQJHeja4MDarMDqPRanTTjVS33gc8DYaq4Q7wqAzoFt4Tfm67ArzQ1RkiOsFgENYAooMXNsTIpG7JZlTkHu3DNY86WPq7is3YEyghpTRYE001TXO5+gJJyeRbVqxQ1qudgIuoU2E0KBhNap0g90hOgNpahY89Zpajshuf/G5R+VJedxbBYKQIQl5E15N+wzRN/irULaWrOdxRqM2j1lmzBSYzmfLyhKlMdxG4baDRJdDR58uETMkb9ewBkN2OPorsE4yXWZd9TnWhzzR/CSmmHo2w5K3mGtdOzgMV0vzKujLgDluqAT4kvvG1AODzVl2/S0KoXjdNb0T3ii2sioq2kuc1pik73X5FKap6g0FuQlXhpzMIPQB3uAb8/CyvDTik9NaWVgMwhYqOQu6y8U4X79MFo2UrAGcNO4w/cXObhu6saDgzRlotAs1FO5aKaYCP1eVKmhpLfqe9YEI6e0Qkuty24A8568j4ZUvmWW197Pm7Foze3wuMIX3sIzsdWjL29OEOUOAlHE/ZvXiiGeaJWVlZhQPHLpg3etnAwqyss7MArJs7+tjASZMmT540eSL7Xn6UT0RublbuIOWnwjPjBxbmyj9eOHp87PhzhVmDBg3KpV+V26J7UVExP6P/BSL91ReU8TRJAAAAAElFTkSuQmCC"} w={10} h={10} />}
        title={'India Largest Tutor Community'}
        text={
          'Select from 35000+ qualified tutors from across India.'
        }
      />
      <Feature
        icon={<Icon as={"image/png;base64,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"} w={10} h={10} />}
        title={'Online & Offline Tuitons'}
        text={
          'Choose your learning mode.'
        }
      />
      <Feature
        icon={<Icon as={FcInTransit} w={10} h={10} />}
        title={'Tutor Replacement'}
        text={
          'Free and instant tutor replacement in case of dissatisfaction.'
        }
      />
      <Feature
        icon={<Icon as={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABMCAMAAAAWYGpdAAAA5FBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADS4f8AAADQ3/3P3fvL2vfN3PnM2/jCz+vK2PXI1vO5x+HG1fG/zunD0e2sudHJ1/Syv9imscmirsWVoLXF0++0wdu8yuW2w92vvNWptc6eqsGPmq+YoriNl6uKk6d9hphyeouDjJ+AiZtob35J8LyIAAAAKHRSTlMABQgCDhEkDANSFNoeZTtyLBpsSjXp32BZRj8vJxbWv69UT/MXypx9F/7SYQAAA5BJREFUWMO9mGlX2kAUQCekKlAUlbrVWpduuZOEVVBxt3v7//9PmYEhDBlSm3B6P3iO8HJnSN68lxnxnyht7FcqlVM4rYxYLSDC5pVfVJTg5xdF7U47GtG+aHcYkUdUZkQczNAGXuScUj+wuIbNHKYXQGSbruB1DtMK0LZNj3CQc04XtmkAZ/8u8teAnm3qwt7a3xNhbavqW/c7bbpAUZq5ZrXmzXs8FNP1wJgwsOmjOEp+v8J3iGC9qidUSUQWEs2hUGy4Et9jykFJHKLoN2WQQsYtRjSE2Kxj2JhL517UQ7Nt5uMm1DF7jK+JlLkmDDVAqhEjJsQyWIjsMKavg84BzzwBtEkh9YgXGZ7kdsnkn1cTk/lYI5t6qGxkHzmNak8z4ygRPR9ppz7adACPQRFM4doCmkEhLnVSVYHLoBiRXh4NnTsFacEn8RG6QVEkvBUvQS7D9E7sLsm0I07gfBmmY1GBX72ipitYH5erp05GWLP7cNnK8nS/A0em8l1FgZubaxQ/bxdmwGdMc/bRuO/WOYaHwEX8iGLNKpnnTlHCvUuEppy0JOX6HBjsZuJ55bL3HugsGMluLzX4mg78Cpu+0GwCsdNUEhavYZiKa88V1ltnQanapn1XRbiFhtXdU8nQBLZs07ZrIV+bCm0q4sDVaFZtUx3uUqbvVtghDF2mN88wfbPCNuDxGXNah66zqpYzQ2LTNxNOXUkszdzNw4tcT/colQVXjkUH2yLVFTPzqbYO9+5y0VD54r3ZdmZmXzfghOoZI5qL1tX6/j4LAkL9vbnn3mES51aRBDhVnK2Yd9yMfh4akcx8c9kyolAurtFhC3pZARPVnvFkIGX21yFQFydqXRYlhOMl9rudQlNKius7cayravGG90Hd8S+FRS2o6yzoFv5tUDOv0IUYjDcKvi71Rbgxu9r38KOQaTjdcGDVpvgm+Dt3MyWol9So2T1hOHjGC2zzC3zruvbZq6aVh3coLmVmQrfQPN2YjSj+7KZs0AzDPoaOXOhpMuVhdE1k906PBG/iWiCaBHnMYG/EJ1TLRvtjGDsy5zcK3xrdEw5VyZphnBKheOELhb9iiazN+FpZiCzV/dyVXnWkLYtM/JIesJ1KQfylnIY8qWT+d6rp7j3Mf0ITFZyTfWpU/PypDFzLucpIKfc5nQzjUBGHsmXeuvKpbrEQOXnFHCsiL42TnZdvX44Y/d3drWeK/gCxiV1nEoQOqAAAAABJRU5ErkJggg=="} w={10} h={10} />}
        title={'100% Customized Classes'} 
        text={
          'Customize your classes  as per your learning need, schedule and budget.'
        }
      />
    </SimpleGrid>
    </div>
      <Image className='bottomimg' h={"65%"} w={"11%"}src='https://guruq.in/static/media/mobile.f850575b.png'/> 
    </Box>
    
    </>
  )
}
