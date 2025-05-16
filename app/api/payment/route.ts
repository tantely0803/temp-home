import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

import { type NextRequest, type NextResponse } from "next/server";
import db from "@/utils/db";
import { formatDate } from "@/utils/format";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const requestHeaders = new Headers(req.headers);
  const origin = requestHeaders.get("origin");

  const { bookingId } = await req.json();

  const booking = await db.booking.findUnique({
    where: { id: bookingId },
    include: {
      proprety: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });

  if (!booking) {
    return Response.json(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  const {
    totalNights,
    orderTotal,
    checkIn,
    checkOut,
    proprety: { image, name },
  } = booking;

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      metadata: { booking: booking.id },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            product_data: {
              name: `${name}`,
              images: [image],
              description: `Stay in this wonderfull place for ${totalNights} nights,from ${formatDate(
                checkIn
              )} to ${formatDate(checkOut)}. Enjoye your stay`,
            },
            unit_amount: orderTotal * 100,
          },
        },
      ],
      mode: "payment",
      return_url: `${origin}/api/confirm?session_id={CHECKOUT_SESSION_ID}`,
    });
    return Response.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.log(error);
    return Response.json(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
};
