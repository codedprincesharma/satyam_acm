import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';
import { getRazorpayConfig } from '@/lib/razorpayConfig';

export async function POST(req) {
  try {
    const { amount, testId } = await req.json();
    if (!amount || !testId) {
      return NextResponse.json({ error: 'Amount and testId are required' }, { status: 400 });
    }

    // Validate amount must be positive
    if (Number(amount) <= 0) {
      return NextResponse.json({ error: 'Amount must be greater than zero' }, { status: 400 });
    }

    const razorpayConfig = getRazorpayConfig();
    if (!razorpayConfig) {
      return NextResponse.json(
        { error: 'Razorpay is not configured on this environment' },
        { status: 500 }
      );
    }

    const razorpay = new Razorpay(razorpayConfig);

    const options = {
      amount: Number(amount), // amount in paise
      currency: 'INR',
      receipt: testId,
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);
    return NextResponse.json(
      { orderId: order.id, amount: order.amount, currency: order.currency, keyId: razorpayConfig.key_id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Razorpay order creation error:', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
