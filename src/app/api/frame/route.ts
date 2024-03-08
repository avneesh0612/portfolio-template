import {
  FrameRequest,
  getFrameHtmlResponse,
  getFrameMessage,
} from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<Response> {
  const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
  const body: FrameRequest = await req.json();
  console.log(body);

  try {
    const { message } = await getFrameMessage(body, {
      neynarApiKey: 'NEYNAR_ONCHAIN_KIT',
    });

    if (message?.button === 1) {
      return new NextResponse(
        getFrameHtmlResponse({
          image: {
            src: `${NEXT_PUBLIC_URL}/About.png`,
          },
          buttons: [
            {
              label: 'About',
              action: 'post',
            },
            {
              label: 'Past Works',
              action: 'post',
            },
            {
              label: 'Blog',
              action: 'link',
              target: 'https://blog.avneesh.tech',
            },
            {
              label: 'Socials',
              action: 'post',
            },
          ],
        }),
      );
    } else if (message?.button === 2) {
      return new NextResponse(
        getFrameHtmlResponse({
          image: {
            src: `${NEXT_PUBLIC_URL}/Works.png`,
          },
          buttons: [
            {
              label: '< Back',
              action: 'post',
            },
            {
              label: 'thirdweb',
              action: 'link',
              target: 'https://thirdweb.com/',
            },
            {
              label: 'Yoke',
              action: 'link',
              target: 'https://www.yoketeam.com/',
            },
            {
              label: 'Candypay',
              action: 'link',
              target: 'https://candypay.fun',
            },
          ],
          postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
        }),
      );
    } else if (message?.button === 3) {
      return new NextResponse(
        getFrameHtmlResponse({
          image: {
            src: `${NEXT_PUBLIC_URL}/Socials.png`,
          },
          buttons: [
            {
              label: '< Back',
              action: 'post',
            },
            {
              label: 'GitHub',
              action: 'link',
              target: 'https://github.com/avneesh0612',
            },
            {
              label: 'Twitter',
              action: 'link',
              target: 'https://twitter.com/avneesh0612',
            },
            {
              label: 'LinkedIn',
              action: 'link',
              target: 'https://www.linkedin.com/in/avneesh0612',
            },
          ],
        }),
      );
    } else {
      return new NextResponse(
        getFrameHtmlResponse({
          image: {
            src: `${NEXT_PUBLIC_URL}/default.png`,
          },
          buttons: [
            {
              label: 'About',
              action: 'post',
            },
            {
              label: 'Past Works',
              action: 'post',
            },
            {
              label: 'Blog',
              action: 'link',
              target: 'https://blog.avneesh.tech',
            },
            {
              label: 'Socials',
              action: 'post',
            },
          ],
        }),
      );
    }
  } catch (error) {
    return new NextResponse(
      getFrameHtmlResponse({
        image: {
          src: `${NEXT_PUBLIC_URL}/default.png`,
        },
        buttons: [
          {
            label: 'About',
            action: 'post',
          },
          {
            label: 'Past Works',
            action: 'post',
          },
          {
            label: 'Blog',
            action: 'link',
            target: 'https://blog.avneesh.tech',
          },
          {
            label: 'Socials',
            action: 'post',
          },
        ],
      }),
    );
  }
}

export const dynamic = 'force-dynamic';
