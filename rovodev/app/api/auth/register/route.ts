import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { hashPassword, setAuthCookie } from '@/lib/auth'
import { validateEmail, validatePassword, generateSlug } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, password } = await request.json()

    // Validation
    if (!fullName?.trim()) {
      return NextResponse.json({ error: 'Full name is required' }, { status: 400 })
    }

    if (!email || !validateEmail(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    const passwordValidation = validatePassword(password)
    if (!passwordValidation.isValid) {
      return NextResponse.json({ error: passwordValidation.errors[0] }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email: email.toLowerCase() }
    })

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists with this email' }, { status: 400 })
    }

    // Generate unique username from full name
    let username = generateSlug(fullName)
    let usernameExists = await db.user.findUnique({ where: { username } })
    let counter = 1
    
    while (usernameExists) {
      username = `${generateSlug(fullName)}-${counter}`
      usernameExists = await db.user.findUnique({ where: { username } })
      counter++
    }

    // Create user
    const hashedPassword = await hashPassword(password)
    const user = await db.user.create({
      data: {
        email: email.toLowerCase(),
        passwordHash: hashedPassword,
        fullName: fullName.trim(),
        username
      }
    })

    // Set auth cookie
    await setAuthCookie(user.id, user.email)

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        username: user.username
      }
    })

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}